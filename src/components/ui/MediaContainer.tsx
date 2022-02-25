import classes from "./MediaContainer.module.css"
import { MediaContainerProps, ToolBarAction } from "../models";
import ToolBar from "./ToolBar";



const MediaContainer = (props: MediaContainerProps) => {
    const settingsHandler = () => {
        console.log("Settings Clicked");
    }
    const toolBarAction: ToolBarAction = {actionName:'Settings', onClick: settingsHandler};
    return (
        <div className={classes['media-container']} 
             style ={{height:props.height, width:props.width}}     
        >
             <ToolBar height={30} actions={[toolBarAction]}></ToolBar> 
            {props.children}
        </div>
    );
};

export default MediaContainer;