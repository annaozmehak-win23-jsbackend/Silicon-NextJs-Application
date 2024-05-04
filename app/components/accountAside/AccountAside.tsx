
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
                <Link className={`btn btnTheme`} href="accountDetails"><i className={`${styles.icon} fa-solid fa-gear`}></i> Details</Link>
                <Link className={`btn btnTheme`} href="security"><i className={`${styles.icon} fa-solid fa-lock`}></i> Security</Link>
                <Link className={`btn btnTheme`} href="savedCourses"><i className={`${styles.icon} fa-regular fa-bookmark`}></i> Saved Courses</Link>
                <Link className={`btn btnTheme`} href="">Sign out</Link>
            </nav>
        </aside>
        
 
    );
}