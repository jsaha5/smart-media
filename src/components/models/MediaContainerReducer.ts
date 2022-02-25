import { MediaContainerState } from "./MediaContainerState";

export interface Action {
    type: string;
    value?: number;
  }
const mediaContainerReducer = (state: MediaContainerState, action: Action) => {

    // updating showsetting 
    if(action.type === 'TOGGLE_SETTINGS') {
        return {...state, showSettings: !state.showSettings}
    }
    else if(action.type === "UPADTE_LEFT") {
        return {...state, left:action.value}
    }
    else if(action.type === "UPADTE_TOP") {
        return {...state, top:action.value}
    }
    else if(action.type === "UPADTE_WIDTH") {
        return {...state, width:action.value}
    }
    
    return {width:200, top: 100, left: 100,showSettings: false};


}

export default mediaContainerReducer;