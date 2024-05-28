import styles from "./AccountDetailsBasicInfoForm.module.css";

export default function AccountDetailsBasicInfoForm() {
    return (
        <section>
        <form className={styles.basicInfoForm} method="post" asp-controller="Account" asp-action="Details">
            <h1 className={styles.pageTitle}>Account Details</h1>
            <h5 className={styles.formTitle}>Basic Info</h5>
    
            <div className={styles.content}>
                <div id={styles.formFirstname} className="input-group">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" />
                </div>
                <div id={styles.formLastname} className="input-group">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName" />
                </div>
                <div id={styles.formEmail} className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div id={styles.formPhone} className="input-group">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" name="phone" />
                </div>
                <div id={styles.formBio} className="input-group">
                    <label htmlFor="biography">Bio <span className={styles.span}>(optional)</span></label>
                    <textarea name="biography"></textarea>
                </div>
                <div className={styles.formButtons}>
                    <button className="btn btn-gray" type="reset">Cancel</button>
                    <button className="btn btn-theme" type="submit">Save changes</button>
                </div>
            </div>
        </form>
    </section>
    );
}