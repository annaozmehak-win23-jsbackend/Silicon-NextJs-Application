import CourseItem from "./CourseItem";
import { CourseContent } from "@/app/interfaces/coursesTypes";
import styles from './CourseItems.module.css';

export default async function CourseItems() {
const courses:CourseContent[] = []

    return (
        <div className={styles.courses}>
            <CourseItem />
        </div>
    );
}