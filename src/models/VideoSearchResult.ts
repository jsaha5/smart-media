import VideoInfo from "./VideoInfo";

export default class VideoSearchResult {
    provider: string;
    searchToken: string;
    items: VideoInfo[];
    constructor() {
        this.provider = "";
        this.searchToken = "";
        this.items = [];
    }
}