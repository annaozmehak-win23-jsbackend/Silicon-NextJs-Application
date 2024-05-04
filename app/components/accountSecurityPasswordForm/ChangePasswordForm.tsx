import styles from './ChangePasswordForm.module.css';


export default function ChangePasswordForm() {
    return (

        <form className={styles.passwordForm} method="post" asp-controller="Account" asp-action="Security">
            <h1 className={styles.pageTitle}>Security</h1>
            <h5 className={styles.formTitle}>Password</h5>

            <div className={styles.content}>
                <div id={styles.formCurrentPassword} className="input-group">
                    <label asp-for="Password!.CurrentPassword"></label>
                    <span asp-validation-for="Password!.CurrentPassword"></span>
                    <input asp-for="Password!.CurrentPassword" />
                </div>
                <div id={styles.formNewPassword} className="input-group">
                    <label asp-for="Password!.NewPassword"></label>
                    <span asp-validation-for="Password!.NewPassword"></span>
                    <input asp-for="Password!.NewPassword" />
                </div>
                <div id={styles.formConfirmPassword} className="input-group">
                    <label asp-for="Password!.ConfirmPassword"></label>
                    <span asp-validation-for="Password!.ConfirmPassword"></span>
                    <input asp-for="Password!.ConfirmPassword" data-val-equalto-other="Password.NewPassword" />
                </div>

                <div className={styles.formButtons}>
                    <button className="btn btn-gray" type="reset">Cancel</button>
                    <button className="btn btn-theme" type="submit">Change password</button>
                </div>
            </div>
        </form>
    );
}