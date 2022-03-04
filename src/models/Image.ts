import AnimationSettings from "./AnimationSettings";
import Media from "./Media";

export default class Image extends Media {
  src: string;

  constructor() {
    super("image", new AnimationSettings());
    this.src = "";
  }
}
