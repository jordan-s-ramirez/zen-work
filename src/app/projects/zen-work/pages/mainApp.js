import React, {useState, useEffect, useRef} from "react";
import './global.css' 
import {useDispatch, useSelector} from "react-redux";
import debounce from "../helperFunctions/debounce";
import ControlsV2 from "../components/settings/controlsV2";
import Background from "../components/background/background";
import { initalizeData } from "../store/settingStore";
import CustomCardOrchestrator from "../components/card/customCardOrchestrator";
import ProjectSwap from "../components/settings/projectSwap/projectSwap";

export default function MainApp() {
  const dispatch = useDispatch()
  const [dim, setDim] = useState([1, 1])
  const currURL = useSelector((state)=>state.settings.youtubeUrl)
  const currentWindows = useSelector((state)=>state.settings.currentWindows)
  const currStyle = useSelector((state)=>state.settings.styleSettings)
  const currLayers = useSelector(state=>state.settings.currentLayers)
  const currBackgroundType = useSelector(state=>state.settings.backgroundType)
  const [toggleButton, setToggleButton] = useState(true)

  // Inital Window Data
  useEffect(()=>{
    setDim([window.innerWidth, window.innerHeight])
    dispatch(initalizeData())
  },[])
  
  // Window resizing
  useEffect(()=>{
    const debounceHandler =  debounce(function handleResize() {
      if(window !== undefined) {
        setDim([window.innerWidth, window.innerHeight])
      }
    }, 1000)
    window.addEventListener('resize', debounceHandler)
    return ()=>{window.removeEventListener('resize', debounceHandler)}
  },[])

  return(
    <>
      <div className="container" style={{position: 'absolute', width:dim[0], height:dim[1]}}>
        <Background width={dim[0]} height={dim[1]} currURL={currURL} backgroundType={currBackgroundType}/>
        <ControlsV2 toggleButton={toggleButton} />
        <ProjectSwap toggleButton={toggleButton}setToggleButton={setToggleButton}/>
        {currentWindows.map((obj, idx) => {
          return(
            <CustomCardOrchestrator 
              obj={obj} 
              idx={idx} 
              currStyle={currStyle} 
              currLayers={currLayers}
              key={idx}
              currAnimation={obj.windowAnimation}
            />
            )
          })}
      </div>
    </>
  )
}