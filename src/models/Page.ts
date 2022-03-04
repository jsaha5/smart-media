import AnimationSettings from "./AnimationSettings";
import Image from "./Image";
import RssFeed from "./RssFeed";
import Video from "./Video";

export default class Page extends AnimationSettings {
  images: Image[];
  videos: Video[];
  texts: Text[];
  feeds: RssFeed[];
  bgColor: string;
  bgImageSrc: string;
  bgType: string;
  audiodSrc: string;

  constructor(public pageDuration: number) {
    super();
    this.pageDuration = pageDuration; //in seconds
    this.images = [];
    this.videos = [];
    this.texts = [];
    this.feeds = [];
    this.bgColor = "#FFFFFF";
    this.bgImageSrc = "";
    this.bgType = "color";
    this.audiodSrc = "";
  }
}
