import { MediaContainerState } from "./MediaContainerState";

export interface Action {
  type: string;
  value?: any;
}
const mediaContainerReducer = (state: MediaContainerState, action: Action) => {
  if (action.type === "TOGGLE_SETTINGS") {
    return { ...state, showSettings: !state.showSettings };
  } else if (action.type === "UPDATE_POSITION") {
    return { ...state, position: action.value };
  } else if (action.type === "UPDATE_TOP") {
    return { ...state, position: { ...state.position, y: action.value } };
  } else if (action.type === "UPDATE_LEFT") {
    return { ...state, position: { ...state.position, x: action.value } };
  } else if (action.type === "UPDATE_WIDTH") {
    return { ...state, width: action.value };
  }
  return {
    width: 300,
    position: { x: 200, y: 200 },
    showSettings: false,
  };
};

export default mediaContainerReducer;
