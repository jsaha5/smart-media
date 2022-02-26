import { MediaContainerState } from "./MediaContainerState";

export interface Action {
  type: string;
  value?: number;
}
const mediaContainerReducer = (state: MediaContainerState, action: Action) => {
  // updating showsetting
  if (action.type === "TOGGLE_SETTINGS") {
    return { ...state, showSettings: !state.showSettings };
  } else if (action.type === "UPDATE_LEFT") {
    return { ...state, left: action.value };
  } else if (action.type === "UPDATE_TOP") {
    return { ...state, top: action.value };
  } else if (action.type === "UPDATE_WIDTH") {
    return { ...state, width: action.value };
  } else if (action.type === "IS_MOUSE_DOWN_TRUE") {
    return { ...state, isMouseDown: true };
  } 
  else if (action.type === "IS_MOUSE_DOWN_FALSE") {
    return { ...state, isMouseDown: false };
  } 
  else if (action.type === "UPDATE_POS1") {
    return { ...state, pos1: action.value };
  } else if (action.type === "UPDATE_POS2") {
    return { ...state, pos2: action.value };
  } else if (action.type === "UPDATE_POS3") {
    return { ...state, pos3: action.value };
  } else if (action.type === "UPDATE_POS4") {
    return { ...state, pos4: action.value };
  }

  return {
    width: 300,
    top: 100,
    left: 100,
    showSettings: false,
    isMouseDown: false,
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
  };
};

export default mediaContainerReducer;
