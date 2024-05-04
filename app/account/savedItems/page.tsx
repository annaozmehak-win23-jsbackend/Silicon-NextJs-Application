import CourseItems from "@/app/components/courseItems/CourseItems";
import AccountAside from "../../components/accountAside/AccountAside";
import styles from './AccountSavedItems.module.css';


export default function AccountDetails() {
    return (
        <div className={styles.accountSavedItems}>
            <div className={`container ${styles.container}`}>
                <AccountAside />
                <div className={styles.details}>
                    <section className={styles.titleSection}>
                        <h2>Saved Items</h2>
                        <div className={styles.btn}>
                            <button className="btn btn-red-border" type="submit"><i className="icon fa-solid fa-trash-can"></i>Delete all</button>
                        </div>
                    </section>
                    <section className={styles.courseSection}>
                        <CourseItems />
                    </section>
                </div>
            </div>    
        </div>
    );
}