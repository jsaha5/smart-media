import TimeSpan from "./TimeSpan";

export default class AnimationSettings {
  startEffect: string;
  startEffectDuration: TimeSpan;
  endEffect: string;
  endEffectDuration: TimeSpan;
  constructor() {
    this.startEffect = "None";
    this.startEffectDuration = new TimeSpan(0, 0, 0);
    this.endEffect = "None";
    this.endEffectDuration = new TimeSpan(0, 0, 0);
  }
}
