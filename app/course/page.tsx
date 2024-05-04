import CourseContent from '../components/singleCourse/CourseContent';
import ProgramDetails from '../components/singleCourse/ProgramDetails';
import styles from './Course.module.css';

export default function Course() {
    return (
        <section className={styles.course}>
            <div className={styles.courseImage}>
                <img className={styles.image} src="/images/course1-bg.svg" alt="Course image" />
            </div>
            <div className={`container ${styles.container}`}>
                <div className={styles.showcaseContainer}>
                    <div className={styles.breadcrumbs}>
                        <p><i className={`${styles.breadcrumbIcon} icon fa-solid fa-house`}></i> Home</p>
                        <i className={`${styles.breadcrumbIcon} icon fa-solid fa-angles-right`}></i>
                        <p>Courses</p>
                        <i className={`${styles.breadcrumbIcon} icon fa-solid fa-angles-right`}></i>
                        <p className="current-page">@Model.Title</p>
                    </div>
                    <div className={styles.tags}>
                            <div id={styles.review}>
                                <p className={styles.tagName}>Best Seller</p>
                            </div>
                            <div id={styles.category} className="tag">
                                <p className={styles.tagName}>Digital</p>
                            </div>
                    </div>
                    <div className={styles.title}>
                        <h1 className={styles.courseTitle}>@Model.Title</h1>
                        <p className={styles.courseDescription}>Egestas feugiat lorem eu neque suspendisse ullamcorper scelerisque aliquam mauris.</p>
                        <div className={styles.courseInfo}>
                            <div className={styles.stars}>
                                <div className={styles.star}></div>
                                <div className={styles.star}></div>
                                <div className={styles.star}></div>
                                <div className={styles.star}></div>
                                <div className={styles.star}></div>
                                <div className={styles.reviewCount}>(1.2K reviews)</div>
                            </div>
                            <p className={styles.likes}><i className="icon fa-regular fa-thumbs-up"></i> @Model.LikesInNumbers likes</p>
                            <p className={styles.duration}><i className="icon fa-regular fa-clock"></i> @Model.Hours hours</p>
                        </div>
                        <div className={styles.authorInfo}>
                            <img src="/images/author-img.svg" alt="" />
                            <div>
                                <p className={styles.createdBy}>Created by</p>
                                <p className={styles.createdBy}>@Model.Author</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CourseContent />
                <ProgramDetails />
            </div>
        </section>
    );
}