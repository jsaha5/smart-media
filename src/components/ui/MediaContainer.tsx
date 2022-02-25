import classes from "./MediaContainer.module.css";
import ToolBar from "./ToolBar";
import React, { useReducer } from "react";
import Settings from "./Settings";
import { MediaContainerProps } from "../models/MediaContainerState";
import { ToolBarAction } from "../models/ToolBarAction";
import mediaContainerReducer from "../models/MediaContainerReducer";

const MediaContainer = (props: MediaContainerProps) => {
  const [containerState, dispatchContainerActions] = useReducer(
    mediaContainerReducer,
    { width: 300, top: 100, left: 100, showSettings: false }
  );

  const settingsHandler = () => {
    dispatchContainerActions({ type: "TOGGLE_SETTINGS" });
  };

  const onLeftChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatchContainerActions({
      type: "UPADTE_LEFT",
      value: parseInt(event.target.value),
    });
  };
  const onTopChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatchContainerActions({
      type: "UPADTE_TOP",
      value: parseInt(event.target.value),
    });
  };
  
  const onWidthChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatchContainerActions({
      type: "UPADTE_WIDTH",
      value: parseInt(event.target.value),
    });
  };
  const toolBarAction: ToolBarAction = {
    actionName: "Settings",
    onClick: settingsHandler,
  };
  return (
    <div
      className={classes["media-container"]}
      style={{
        width: containerState.width,
        top: containerState.top,
        left: containerState.left,
      }}
    >
      <ToolBar height={30} actions={[toolBarAction]}></ToolBar>
      <div className={classes["media-container-body"]}>
        {!containerState.showSettings && props.children}
        {containerState.showSettings && (
          <Settings
            data={containerState}
            leftChnageHandler={onLeftChangeHandler}
            topChnageHandler={onTopChangeHandler}
            widthChnageHandler={onWidthChangeHandler}
          />
        )}
      </div>
    </div>
  );
};

export default MediaContainer;
