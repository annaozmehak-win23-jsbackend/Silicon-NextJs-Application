import CourseItem from "./CourseItem";
import { Course } from "@/app/interfaces/coursesTypes";
import styles from './CourseItems.module.css';

export default async function CourseItems() {
    // const res = await fetch('https://localhost:9999/api/courses')
    // const courses:Course[] = await res.json()

    const courses:Course[] = []

    return (
        <div className={styles.coursesSection}>
            <div className={styles.courses}>
                {/* {
                    courses.map(course => <CourseItem key={course.id} item={course} />)
                } */}
                <CourseItem />
            </div>
         
        </div>
    );
}