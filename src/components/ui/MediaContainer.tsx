import classes from "./MediaContainer.module.css";
import ToolBar from "./ToolBar";
import React, { useReducer, useRef } from "react";
import Settings from "./Settings";
import { MediaContainerProps } from "../models/MediaContainerState";
import { ToolBarAction } from "../models/ToolBarAction";
import mediaContainerReducer from "../models/MediaContainerReducer";

const MediaContainer = (props: MediaContainerProps) => {
  const mediaContainerDiv = useRef<HTMLDivElement>(null);
  const [containerState, dispatchContainerActions] = useReducer(
    mediaContainerReducer,
    {
      width: 300,
      top: 100,
      left: 100,
      showSettings: false,
      isMouseDown: false,
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
    }
  );

  const onMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log("Mouse down event");
    console.log(event);
    dispatchContainerActions({ type: "IS_MOUSE_DOWN_TRUE" });
    dispatchContainerActions({ type: "UPDATE_POS3", value: event.clientX });
    dispatchContainerActions({ type: "UPDATE_POS4", value: event.clientY });
  };
  const onMouseMove = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log("Mouse move event");
    if (containerState.isMouseDown) {
      console.log("Mouse move event");
      // calculate the new cursor position:
      dispatchContainerActions({
        type: "UPDATE_POS1",
        value: containerState.pos3! - event.clientX,
      });
      dispatchContainerActions({
        type: "UPDATE_POS2",
        value: containerState.pos4! - event.clientY,
      });
      dispatchContainerActions({ type: "UPDATE_POS3", value: event.clientX });
      dispatchContainerActions({ type: "UPDATE_POS4", value: event.clientY });
      dispatchContainerActions({
        type: "UPDATE_TOP",
        value: mediaContainerDiv.current!.offsetTop - containerState.pos2!,
      });
      dispatchContainerActions({
        type: "UPDATE_LEFT",
        value: mediaContainerDiv.current!.offsetLeft - containerState.pos1!,
      });
    }
  };

  const onMouseUp = (event: React.MouseEvent) => {
    console.log("Mouse Up event");
    event.preventDefault();
    dispatchContainerActions({ type: "IS_MOUSE_DOWN_FALSE" });
    dispatchContainerActions({
      type: "UPDATE_POS1",
      value: 0,
    });
    dispatchContainerActions({
      type: "UPDATE_POS2",
      value: 0,
    });
    dispatchContainerActions({ type: "UPDATE_POS3", value: 0 });
    dispatchContainerActions({ type: "UPDATE_POS4", value: 0});
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
    <div
      ref={mediaContainerDiv}
      className={classes["media-container"]}
      style={{
        width: containerState.width,
        top: containerState.top,
        left: containerState.left,
      }}
    >
      <ToolBar
        height={30}
        actions={[toolBarAction]}
        mouseDownHandler={onMouseDown}
        mouseMoveHandler={onMouseMove}
        mouseUpHaldler={onMouseUp}
        isMouseDown={containerState.isMouseDown}
      />
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
