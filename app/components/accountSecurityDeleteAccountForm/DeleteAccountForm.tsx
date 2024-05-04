import styles from './DeleteAccountForm.module.css';


export default function DeleteAccountForm() {
    return (
        <form className={styles.deleteAccountForm} method="post" asp-controller="Account" asp-action="DeleteAccount">
            <h5 className={styles.formTitle}>Delete account</h5>
            <p>When you delete your account, your public profile will be deactivated immediately. If you change your mind before the 14 days are up, sign in with your email and password, and we'll send you a link to reactive your account'</p>
            <div className={styles.content}>
                <div id="form-delete" className="checkbox">
                    <div className="checkbox-group">
                        <input type='checkbox' asp-for="DeleteAccount!.Delete" />
                        <label asp-for="DeleteAccount!.Delete">Yes, I want to delete my account.</label>
                    </div>
                    <span asp-validation-for="DeleteAccount!.Delete"></span>
                </div>
                <div className="form-button">
                    <button className="btn btn-red" type="submit">Delete</button>
                </div>
            </div>

        </form> 
    );
}