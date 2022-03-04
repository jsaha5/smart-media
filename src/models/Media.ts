import AnimationSettings from "./AnimationSettings";

export default class Media {
  isDesignTime: boolean;
  top: number;
  calculatedTop: number;
  left: number;
  calculatedLeft: number;
  width: number;
  calculatedWidth: number;
  height: number;
  calculatedHeight: number;
  startTime: number;
  provider: string;
  uid: string;
  constructor(public type: string, public animationSettings?: AnimationSettings) {
    this.type = type;
    this.animationSettings = animationSettings;
    this.isDesignTime = true;
    this.top = 0;
    this.calculatedTop = 0; //in %
    this.left = 0;
    this.calculatedLeft = 0; //in %
    this.width = 0;
    this.calculatedWidth = 0; //in %
    this.height = 0;
    this.calculatedHeight = 0; //in %
    this.startTime = 0; //in seconds
    this.provider = "";
    this.uid = Date.now().toString();
  }
//   evaluateCalculatedProperties () : void {
//     this.calculatedTop = (this.top * 100) / screen.height;
//     this.calculatedLeft = (this.left * 100) / screen.width;
//     this.calculatedWidth = (this.width * 100) / screen.width;
//     this.calculatedHeight = (this.height * 100) / screen.height;
//   };
}
