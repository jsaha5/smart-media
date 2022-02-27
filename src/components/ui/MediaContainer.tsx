import classes from "./MediaContainer.module.css";
import ToolBar from "./ToolBar";
import React, { useReducer, useRef } from "react";
import Settings from "./Settings";
import { MediaContainerProps } from "../models/MediaContainerState";
import { ToolBarAction } from "../models/ToolBarAction";
import mediaContainerReducer from "../models/MediaContainerReducer";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

const MediaContainer = (props: MediaContainerProps) => {
  const mediaContainerDiv = useRef<HTMLDivElement>(null);
  const [containerState, dispatchContainerActions] = useReducer(
    mediaContainerReducer,
    {
      width: 300,
      position: { x: 300, y: 0 },
      showSettings: false,
    }
  );
  const dragHandler = (event: DraggableEvent, data: DraggableData) => {
    console.log(event);
    console.log(data);
    dispatchContainerActions({
      type: "UPDATE_POSITION",
      value: { x: data.x, y: data.y },
    });
  };

  const settingsHandler = () => {
    dispatchContainerActions({ type: "TOGGLE_SETTINGS" });
    console.log(mediaContainerDiv);
  };

  const onLeftChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatchContainerActions({
      type: "UPDATE_LEFT",
      value: parseInt(event.target.value),
    });
  };
  const onTopChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatchContainerActions({
      type: "UPDATE_TOP",
      value: parseInt(event.target.value),
    });
  };

  const onWidthChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatchContainerActions({
      type: "UPDATE_WIDTH",
      value: parseInt(event.target.value),
    });
  };
  const toolBarAction: ToolBarAction = {
    actionName: "Settings",
    onClick: settingsHandler,
  };
  return (
    <Draggable
      handle="#handle"
      onDrag={dragHandler}
      nodeRef={mediaContainerDiv}
      position={containerState.position}
    >
      <div
        ref={mediaContainerDiv}
        className={classes["media-container"]}
        style={{
          width: containerState.width,
        }}
      >
        <ToolBar height={30} actions={[toolBarAction]} isMouseDown={false} />
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
    </Draggable>
  );
};

export default MediaContainer;
