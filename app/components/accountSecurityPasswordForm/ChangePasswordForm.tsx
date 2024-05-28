import styles from './ChangePasswordForm.module.css';


export default function ChangePasswordForm() {
    return (

        <form className={styles.passwordForm} method="post" asp-controller="Account" asp-action="Security">
            <h1 className={styles.pageTitle}>Security</h1>
            <h5 className={styles.formTitle}>Password</h5>

            <div className={styles.content}>
                <div id={styles.formCurrentPassword} className="input-group">
                    <label htmlFor="currentPassword">Current password</label>
                    <input type="password" name='currentPassword' />
                </div>
                <div id={styles.formNewPassword} className="input-group">
                    <label htmlFor="newPassword">New password</label>
                    <input type='password' name='newPassword' />
                </div>
                <div id={styles.formConfirmPassword} className="input-group">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type='password' name='confirmPassword' />
                </div>

                <div className={styles.formButtons}>
                    <button className="btn btn-gray" type="reset">Cancel</button>
                    <button className="btn btn-theme" type="submit">Change password</button>
                </div>
            </div>
        </form>
    );
}