export interface MediaContainerProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}
export interface ToolBarAction {
  actionName: string;
  icon?: string;
  onClick: () => void;
}
export interface ToolBarProps {
  height: number;
  actions: ToolBarAction[];
}
