import Media from "./Media";

export default class RssFeed extends Media {
  src: string;
  slideInterval: number;
  refreshInterval: number;
  items: never[];
  bgColor: string;
  fontName: string;
  fontSize: number;
  fontColor: string;
  constructor() {
    super("rss");
    this.src = "";
    this.slideInterval = 10; //seconds
    this.refreshInterval = 10; //seconds
    this.items = [];
    this.bgColor = "#FFFFFF";
    this.fontName = "";
    this.fontSize = 10;
    this.fontColor = "#000000";
  }
}
