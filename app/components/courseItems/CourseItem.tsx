import { Course } from "@/app/interfaces/coursesTypes";
import AddBookmarkBtn from "../bookmark/BookmarkBtn";
import Link from "next/link";
import styles from './CourseItem.module.css'

interface CourseItemProps {
    item: Course;
}

// export default function CourseItem({item}: CourseItemProps) {
    export default function CourseItem() {
    return (
        // <Link href={`/courses/${item.id}`} className={styles.course}>
        <Link href={`/courses/1`} className={styles.course}>
            <div id="addMessage"></div>

            <div className="courses">
                <div className="course">
                    <div className="course-image">
                        {/* <img className={styles.courseImage} src={item.image} alt={item.title} /> */}
                        <img className={styles.courseImage} src="/images/course1.svg" alt="" />
                    </div>
                    {/* <AddBookmarkBtn itemId={item.id} /> */}
                    <AddBookmarkBtn itemId="" />
                    <div className={styles.tag}>
                        <p className={styles.tagTitle}>Best Seller</p>
                    </div>
                    <div className={styles.courseInfo}>
                        <h2 className={styles.courseTitle}>HTML</h2>
                        <p className={styles.author}>
                            {/* {
                                item.authors.map(author => <span>Anna</span>)
                            } */}
                            <span>by Anna</span>
                        </p>
                        {/* <p className={styles.price}>$100</p> */}
                            <div className={styles.priceWithSale}>
                                {/* <p className="sales-price">${item.prices.discount}</p>
                                <p className="regular-price">${item.prices.price}</p> */}
                                <p className={styles.salesPrice}>$100</p>
                                <p className={styles.regularPrice}>$200</p>
                            </div>

                        <div className={styles.cardBottom}>
                            <p className={styles.duration}><i className="fa-regular fa-clock"></i> 220 hours</p>
                            <p className={styles.rating}><i className="fa-regular fa-thumbs-up"></i> 90% (3.2K)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <span className="information">
                    <span className="alert alert-success">
                        You have been subscribed
                    </span>
                    <span className="alert alert-danger">
                        Something went wrong. Please contact web admin.
                    </span>
            </span> */}
        </Link>
        
    );
}