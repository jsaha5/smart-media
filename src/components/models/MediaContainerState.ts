import { ControlPosition } from "react-draggable";

export interface MediaContainerState {
  showSettings: boolean;
  width?: number;
  position: ControlPosition;
}
export interface MediaContainerProps {
  children: React.ReactNode;
}
