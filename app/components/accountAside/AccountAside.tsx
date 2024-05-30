'use client'

import Link from 'next/link';
import styles from './AccountAside.module.css';
import { useRef, useState, ChangeEvent } from 'react';

export default function AccountAside() {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState("");
    const [profileImage, setProfileImage] = useState("/images/avatar.svg");

    const handleFileChange = async (event : ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
    
            const formData = new FormData();
            formData.append('file', file);
    
            const res = await fetch('https://fileprovider-win23-annaozmehak.azurewebsites.net/api/Upload?code=pIfXazN1RAMcOObk2Q1q5LCrjodZjEvGPmRDlPTxVfKmAzFuN1TVXw%3D%3D&containerName=courses', { 
                method: 'POST',
                body: formData
            });
    
            if (res.status === 200) {
                const result = await res.json();
                setProfileImage(result.filePath);
                setError("");
            } else {
                setError("An error occurred while uploading the image");
            }
        }
    }

    return (
        <aside className={styles.accountAside}>

            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.profileInfo}>
                <div className={styles.imageContainer}>
                    <img className={styles.img} id="profileImage" src={profileImage} alt='' />

                    <form id="updateProfileImage" encType='multipart/form-data'>
                        <input id="fileInput" type="file" name="file" accept='image/*' hidden onChange={handleFileChange} />
                        <label htmlFor='fileInput' className={`btn btn-circle btn-circle-sm ${styles.label}`}><i className="fa-regular fa-refresh"></i></label>
                    </form>

                </div>

                <h5 className={styles.userName}>Anna Ozmehak</h5>
                <p className={styles.email}>anna.ozmehak@gmail.com</p>
            </div>
            <nav className={styles.nav}>
                <Link className={styles.btnTheme} href="/account/details"><i className="icon fa-solid fa-gear"></i> Account Details</Link>
                <Link className={styles.btnTheme} href="/account/security"><i className="icon fa-solid fa-lock"></i> Security</Link>
                <Link className={styles.btnTheme} href="/account/notifications"><i className="icon fa-regular fa-bell"></i> Notifications</Link>
                <Link className={styles.btnTheme} href="/account/messages"><i className="icon fa-regular fa-message"></i> Messages</Link>
                <Link className={styles.btnTheme} href="/account/savedItems"><i className="icon fa-regular fa-bookmark"></i> Saved Items</Link>
                <Link className={styles.btnTheme} href=""><i className="icon fa-solid fa-arrow-right-from-bracket"></i> Sign out</Link>
            </nav>
        </aside>
        
 
    );
}