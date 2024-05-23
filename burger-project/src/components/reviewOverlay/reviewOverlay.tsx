import { FC, useState } from "react";
import styles from "./reviewOverlay.module.scss";
import ReviewOverlayProps, { ReviewData } from "./reviewOverlay.interface";
import { AnimatePresence, motion } from "framer-motion";
import MotionCard from "./components/motionCard/motionCard";
import FileUpload from "./components/fileUpload/fileUpload";
import Slider from "./components/slider/slider";
import Pagination from "./components/pagination/pagination";
import TagSelector from "./components/tagChoices/tagChoices";
import TextUpload from "./components/textUpload/textUpload";

const ReviewOverlay: FC<ReviewOverlayProps> = (props) => {
    const { closeOverlay } = props

    const [reviewStep, setReviewStep] = useState(1);
    const [reviewData, setReviewData] = useState<ReviewData>({ photo: null,  taste: 3, texture: 3, visual: 3, tags: null, other: null })

    const handleNextStep = (updates: Partial<ReviewData>) => {
        setReviewStep(reviewStep + 1);
        setReviewData(prev => ({...prev, ...updates}))
    }

    const handleFinishReview = (updates: Partial<ReviewData>) => {
        
        //convert img file to base 64
        // send the reviewData to api 

        console.log(reviewData);

        closeOverlay();
    }

    return(
        <div className={styles.overlay}>
            
            <div className={styles.button_wrapper}>
                <button className={styles.close_button} onClick={closeOverlay}>
                    <div className={styles.icon}></div>
                </button>
            </div>

            <div className={styles.pagination_wrapper}>
                <Pagination step={reviewStep} />
            </div>
            

            <div className={styles.color_overlay}></div>

            <motion.div layout className={styles.review_wrapper}>
                <AnimatePresence>
                    {reviewStep > 5 && 
                        <MotionCard  key={"other"}>
                            <h4>Have more to share?</h4>
                            <div className={styles.inner_wrapper}>
                                <TextUpload placeholder="share your experience in detail..." completeReview={handleFinishReview} />
                            </div>
                        </MotionCard>}
                    {reviewStep > 4 && 
                        <MotionCard  key={"tags"}>
                            <h4>What stood out?</h4>
                            <div className={styles.inner_wrapper}>
                                <TagSelector handleNextStep={handleNextStep} />
                            </div>
                        </MotionCard>}
                    {reviewStep > 3 && 
                        <MotionCard  key={"visual"}>
                            <h4>What about the visual</h4>
                            <div className={styles.inner_wrapper}>
                                <Slider  handleNextStep={handleNextStep} value={"visual"} scale={["😖", "🤔", "😀", "🤩", "🤑"]} />
                            </div>
                        </MotionCard>}
                    {reviewStep > 2 && 
                        <MotionCard  key={"texture"}>
                            <h4>How was the texture?</h4>
                            <div className={styles.inner_wrapper}>
                                <Slider  handleNextStep={handleNextStep} value={"texture"} scale={["🤮", "😦", "😐", "😎", "😍"]} />
                            </div>
                        </MotionCard>}
                    {reviewStep > 1 && 
                        <MotionCard  key={"taste"}>
                            <h4>How did it taste?</h4>
                            <div className={styles.inner_wrapper}>
                                <Slider  handleNextStep={handleNextStep} value={"taste"} scale={["🤢", "😞", "😏", "🤤", "🤯"]} />
                            </div>
                        </MotionCard>}
                    {reviewStep > 0 && 
                        <MotionCard key={"photo"}>
                            <h4>Show the burger!</h4>
                            <div className={styles.inner_wrapper}>
                                <FileUpload handleNextStep={handleNextStep} />
                            </div>
                        </MotionCard>}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default ReviewOverlay