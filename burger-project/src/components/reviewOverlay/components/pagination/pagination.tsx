import { FC } from "react";
import styles from "./pagination.module.scss";
import PaginationProps from "./pagination.interface";
import combineClasses from "@/helpers/combineClasses";

const Pagination: FC<PaginationProps> = (props) => {
    const { step } = props;

    return <div className={styles.pagination_wrapper}>
        <div className={combineClasses(styles.pagination, styles.other, step > 5 ? styles.active : "")}></div>
        <div className={combineClasses(styles.pagination, styles.visual, step > 4 ? styles.active : "")}></div>
        <div className={combineClasses(styles.pagination, styles.texture, step > 3 ? styles.active : "")}></div>
        <div className={combineClasses(styles.pagination, styles.taste, step > 2 ? styles.active : "")}></div>
        <div className={combineClasses(styles.pagination, styles.photo, step > 1 ? styles.active : "" )}></div>
    </div>
};

export default Pagination;