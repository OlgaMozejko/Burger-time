export default interface ReviewOverlayProps {
    closeOverlay: () => void;
}

export interface ReviewData {
    photo: File | null;
    taste: number;
    texture: number;
    visual: number;
    tags: string[]  | null;
    other: string | null;
}

export interface HandleNextStepsAsProps {
    handleNextStep: (updates: Partial<ReviewData>) => void;
}