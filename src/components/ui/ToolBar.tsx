import classes from "./ToolBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { ToolBarProps } from "../models/ToolBarProps";

const ToolBar = (props: ToolBarProps) => {
  return (
    <div className={classes["tool-bar"]} style={{ height: props.height }}>
      {props.actions.map((action) => (
        <button
          key={action.actionName}
          className={classes["tool-bar-action"]}
          onClick={action.onClick}
        >
          {action.actionName} <FontAwesomeIcon icon={faGear} />
        </button>
      ))}
    </div>
  );
};

export default ToolBar;
