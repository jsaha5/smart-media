import { ToolBarAction } from "./ToolBarAction";

export interface ToolBarProps {
  height: number;
  actions: ToolBarAction[];
  isMouseDown: boolean;
  mouseDownHandler: (event: React.MouseEvent) => void;
  mouseMoveHandler: (event: React.MouseEvent) => void;
  mouseUpHaldler: (event: React.MouseEvent) => void;
}
