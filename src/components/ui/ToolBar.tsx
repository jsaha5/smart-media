import classes from "./ToolBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { ToolBarProps } from "../models/ToolBarProps";
import React from "react";

const ToolBar = (props: ToolBarProps) => {
  
  return (
    <div
      onMouseDown={props.mouseDownHandler}
      onMouseMove={props.mouseMoveHandler}
      onMouseUp={props.mouseUpHaldler}
      className={`${classes["tool-bar"]} ${props.isMouseDown && classes['tool-bar-mousedown']}` } 
      style={{ height: props.height }}
    >
      {props.actions.map((action) => (
        <button
          key={action.actionName}
          className={classes["tool-bar-action"]}
          onClick={action.onClick}
        >
          {action.actionName} <FontAwesomeIcon icon={faGear} />
        </button>
      ))}
    </div>
  );
};

export default ToolBar;
