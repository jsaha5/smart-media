export interface MediaContainerState {
    showSettings: boolean;
    isMouseDown: boolean;
    pos1?: number;
    pos2?: number;
    pos3?: number;
    pos4?: number;
    width?: number;
    top?: number;
    left?: number;
  }
export interface MediaContainerProps{
  children: React.ReactNode;
}