import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteWindow } from '../../store/settingStore'
import { IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

export default function Weather(props) {
  const dispatch = useDispatch()

  return(
    <div>
      <h1 style={{margin:0, minWidth:200}}>Weather {props.windowIdx}</h1>
      <IconButton variant="outlined"
        style={{
          position: 'absolute',
          left: '85%',
          top: '0'
        }}
      >
        <ClearIcon size="small" onClick={()=>{dispatch(deleteWindow(parseInt(props.windowIdx)))}}/>
      </IconButton>
    </div>
  )
}