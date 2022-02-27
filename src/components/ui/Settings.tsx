import { MediaContainerState } from "../models/MediaContainerState";
import classes from "./Settings.module.css";

interface SettingsProps {
  data: MediaContainerState;
  leftChnageHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  widthChnageHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  topChnageHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Settings = (props: SettingsProps) => {
  return (
    <div className={classes["setting-container"]}>
      <h4>Settings</h4>
      <form>
        <div className={classes["settings-input-container"]}>
          <div className={classes["settings-input"]}>
            <label htmlFor="weidth">Width</label>
            <input
              type="number"
              id="weidth"
              onChange={props.widthChnageHandler}
              value={props.data.width}
            ></input>
          </div>
          <div className={classes["settings-input"]}>
            <label htmlFor="top">Top</label>
            <input
              type="number"
              id="top"
              onChange={props.topChnageHandler}
              value={props.data.position.y}
            ></input>
          </div>
          <div className={classes["settings-input"]}>
            <label htmlFor="left">Left</label>
            <input
              type="number"
              onChange={props.leftChnageHandler}
              id="left"
              value={props.data.position.x}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Settings;
