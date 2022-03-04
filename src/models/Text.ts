import Media from "./Media";

export default class Text extends Media {
    bgColor: string;
    text: string;
    constructor() {
        super('text');
        this.bgColor = "#ffffff";
		this.text = 'Insert some text here';
    }
}