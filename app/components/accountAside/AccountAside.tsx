
import Link from 'next/link';
import styles from './AccountAside.module.css';

export default function AccountAside() {
    return (
        <aside className={styles.accountAside}>
            <div className={styles.profileInfo}>
                <div className={styles.imageContainer}>
                    <img className={styles.img} id="profileImage" src="~/uploads/@user.ProfileImage" />
                    <form id="updateProfileImage" asp-controller="Account" asp-action="UploadProfileImage" method="post">
                        <input id="fileInput" type="file" name="ProfileImage" hidden />
                        <label className={`btn btn-circle btn-circle-sm ${styles.label}`}><i className="fa-regular fa-refresh"></i></label>
                    </form>
                </div>

                <h5 className={styles.userName}>Anna Ozmehak</h5>
                <p className={styles.email}>anna.ozmehak@gmail.com</p>
            </div>
            <nav className={styles.nav}>
                <Link className={styles.btnTheme} href="accountDetails"><i className={`${styles.icon} fa-solid fa-gear`}></i> Account Details</Link>
                <Link className={styles.btnTheme} href="accountSecurity"><i className={`${styles.icon} fa-solid fa-lock`}></i> Security</Link>
                <Link className={styles.btnTheme} href="accountSecurity"><i className={`${styles.icon} fa-regular fa-bell`}></i> Notifications</Link>
                <Link className={styles.btnTheme} href="accountSecurity"><i className={`${styles.icon} fa-regular fa-message`}></i> Messages</Link>
                <Link className={styles.btnTheme} href="accountSavedCourses"><i className={`${styles.icon} fa-regular fa-bookmark`}></i> Saved Items</Link>
                <Link className={styles.btnTheme} href=""><i className={`${styles.icon} fa-solid fa-arrow-right-from-bracket`}></i> Sign out</Link>
            </nav>
        </aside>
        
 
    );
}