import { FC } from "react";
import styles from "./motionCard.module.scss"
import MotionCardProps from "./motionCard.interface";
import { motion } from "framer-motion";

const MotionCard: FC<MotionCardProps> = (props) => {
    const { children } = props;

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
      };

    return(
        <motion.div className={styles.card} 
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={cardVariants}
        transition={{ duration: 0.5 }}>
            {children}
        </motion.div>
    )
}

export default MotionCard