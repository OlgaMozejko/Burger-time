import { HandleNextStepsAsProps } from "../../reviewOverlay.interface";

export default interface SliderProps  extends HandleNextStepsAsProps{
    value: string;
    scale: string[];
}