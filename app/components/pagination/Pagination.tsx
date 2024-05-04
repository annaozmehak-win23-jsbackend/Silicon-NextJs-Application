import styles from './Pagination.module.css';

export default function Pagination() {
    return (
        <nav className={styles.nav} aria-label="course pagination">
            <ul className={styles.pagination}>
                <li className={styles.pageItem}><a href="#">1</a></li>
                <li className={styles.pageItem}><a href="#">2</a></li>
                <li className={styles.pageItem}><a href="#">3</a></li>
                <li className={styles.pageItem}><a href="#">4</a></li>
            </ul>
        </nav> 
    );
}