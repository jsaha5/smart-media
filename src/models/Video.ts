import AnimationSettings from "./AnimationSettings";
import Media from "./Media";

export default class Video extends Media {
  src: string;
  altSrc: string;
  skinUrl: string;
  volume: number;

  constructor() {
    super("video", new AnimationSettings());
    this.src = "";
    this.altSrc = "";
    this.skinUrl = "";
    this.volume = 100;
  }
}
