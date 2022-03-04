import Media from "./Media";

export default class Ticker extends Media {
    text: string;
    rssUrl: string;
    sourceType: string;
    fontName: string;
    fontSize: number;
    fontColor: string;
    bgColor: string;
    slideTime: number;

    constructor() {
        super('ticker');
        this.text = "tMedia Ticker Tape: Add you text content!";
		this.rssUrl = "";
		this.sourceType = "text";
		this.fontName = "Arail";
		this.fontSize = 10; // in pt
		this.fontColor = '#000000';
		this.bgColor = "#cccccc";
		this.slideTime = 20; //seconds
    }

}