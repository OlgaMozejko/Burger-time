import { FC, useState, ChangeEvent, useEffect, useRef } from 'react';
import styles from './slider.module.scss';
import SliderProps from './slider.interface';
import { motion } from 'framer-motion';

const Slider: FC<SliderProps> = (props) => {
    const [sliderValue, setSliderValue] = useState(3);
    const [wasClicked, setWasClicked] = useState(false);
    const [initialPosition, setInitialPosition] = useState(0);

    const sliderRef = useRef<HTMLInputElement>(null);

    const { scale, value, handleNextStep } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      setSliderValue(newValue);
    };

    const handleOnClick = (value: string) => {
        switch (value) {
            case "taste":
                handleNextStep({ taste: sliderValue });
                break;
            case "texture":
                handleNextStep({ texture: sliderValue });
                break;
            case "visual":
                handleNextStep({ visual: sliderValue });
                break;
            default:
                return;
        }
        setWasClicked(true);
    };

    const calculatePosition = () => {
        if (sliderRef.current) {
            const sliderWidth = sliderRef.current.clientWidth;
            const stepWidth = (sliderWidth - 16) / (scale.length - 1);
            return stepWidth * (sliderValue - 1);
        }
        return 0;
    };

    useEffect(() => {
      if(sliderRef.current){
        const sliderWidth = sliderRef.current.clientWidth;
        const stepWidth = (sliderWidth - 16) / (scale.length - 1);
        setInitialPosition(stepWidth * (sliderValue - 1));
      }
    }, [sliderRef])


    return (
        <div className={styles.container}>
            <div className={styles.button_wrapper}>
                <button
                    className="button_big"
                    disabled={wasClicked}
                    onClick={() => handleOnClick(value)}
                >
                    <span>Next</span>
                </button>
            </div>
            <div className={styles.slider_wrapper}>
                <input
                    type="range"
                    min="1"
                    max="5"
                    value={sliderValue}
                    onChange={handleChange}
                    className={styles.slider}
                    ref={sliderRef}
                />
                <motion.div
                    className={styles.emojiHandle}
                    initial={{ x: initialPosition }}
                    animate={{ x: calculatePosition() }}
                    transition={{ type: "just", duration: 0.2 }}
                >
                    {scale[sliderValue - 1]}
                </motion.div>
            </div>
        </div>
    );
};

export default Slider;