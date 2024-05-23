import { ReviewData } from "../../reviewOverlay.interface";

export default interface TextUploadProps  {
    placeholder: string;
    completeReview: (updates: Partial<ReviewData>) => void;
}