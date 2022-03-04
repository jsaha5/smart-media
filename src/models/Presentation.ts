import Page from "./Page";
import Ticker from "./Ticker";

export default class Presentation {
  id: string;
  pages: Page[];
  tickers: Ticker[];
  currentPageIndex: number;

  constructor(
    public name: string,
    public pageDuration: number,
    public width: number,
    public height: number
  ) {
    this.id = Math.random().toString();
    this.currentPageIndex = 0;
    this.pages = [];
    this.tickers = [];
    this.name = name;
    this.pageDuration = pageDuration;
    this.width = width;
    this.height = height;
  }
}
