export default class PresentationSettings {
  name: string;
  screenWidth: number;
  screenHeight: number;
  constructor() {
    this.name = "";
    this.screenWidth = window.screen.width;
    this.screenHeight = window.screen.height;
  }
}
