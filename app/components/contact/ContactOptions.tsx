import styles from "./ContactOptions.module.css";

export default function ContactOptions() {
    return (
        <div className={styles.contactOptions}>
            <div className={styles.option}>
                <div><i className={`fa-regular fa-envelope ${styles.icon}`}></i></div>
                <div>
                    <h4 className={styles.contactAlternative}>Email us</h4>
                    <p className={styles.contactDescription}>Please feel free to drop us a line. We will respond as soon as possible</p>
                    <a className={styles.contactLink} href="">Leave a message <i className={`fa-solid fa-arrow-right ${styles.linkIcon}`}></i></a>
                </div>
            </div>
            <div className={styles.option}>
                <div><i className={`fa-solid fa-user-plus ${styles.icon}`}></i></div>
                <div>
                    <h4 className={styles.contactAlternative}>Careers</h4>
                    <p className={styles.contactDescription}>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum</p>
                    <a className={styles.contactLink} href="">Send an application <i className={`fa-solid fa-arrow-right ${styles.linkIcon}`}></i></a>
                </div>
            </div>
        </div>
    );
}