import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux'
import { deleteWindow } from '../../store/settingStore'
import { Grid, Input } from '@mui/material';
import { updateWindowTitle } from '../../store/settingStore';
export default function CustomCard(props) {
  const dispatch = useDispatch()

  return(
    <div className='paper' style={props.currStyle}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{marginTop:0, marginBottom:0, marginLeft:0, marginRight:0}}
      >
        <Grid item >
          <Input 
            disableUnderline 
            sx={{margin:0, textAlign:'left', fontSize:'1.5rem', fontWeight:'bold'}} 
            value={props.title} 
            onChange={(e)=>{dispatch(updateWindowTitle({idx: props.windowIdx, data: e.target.value}))}}
          />
        </Grid>
        <Grid item>
          <div style={{position:'relative'}}>
            <ClearIcon size="large" onClick={()=>{dispatch(deleteWindow(parseInt(props.windowIdx)))}}/>
          </div>
        </Grid>
      </Grid>
      {props.children}
    </div>
  )
}