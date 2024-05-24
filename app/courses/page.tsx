import CourseItems from "../components/courseItems/CourseItems";
import Pagination from "../components/pagination/Pagination";
import SearchFilters from "../components/searchBox/SearchFilters";
import styles from "./Page.module.css";


export default function Courses() {
    
    return (
        <section className={styles.courses}>
        <div className={`container ${styles.container}`}>
            <div className={styles.breadcrumbs}>
                <p className={styles.breadcrumb}><i className="icon fa-solid fa-house"></i> Home</p>
                <i className={`fa-solid fa-angles-right ${styles.icon}`}></i>
                <p className={styles.currentPage}>Courses</p>
            </div>
            <div className={styles.titleAndFilter}>
                <h1 className={styles.pageTitle}>Courses</h1>
                <SearchFilters />
            </div>

           <CourseItems />
        </div>
        <Pagination />
    </section>
    );
}
