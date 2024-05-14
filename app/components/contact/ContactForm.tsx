import styles from "./ContactForm.module.css";

export default function ContactForm() {
    return (
        <form method="post" noValidate>
            <h2>Get In Contact With Us</h2>
            <div id={styles.formContactFullName} className={`input-group ${styles.inputGroup}`}>
                <label asp-for="FullName">Full name</label>
                <span asp-validation-for="FullName"></span>
                <input asp-for="FullName" />
            </div>
            <div className={`input-group ${styles.inputGroup}`}>
                <label asp-for="Email">Email address</label>
                <span asp-validation-for="Email"></span>
                <input asp-for="Email" />
            </div>
            <div className={`input-group ${styles.inputGroup}`}>
                <label asp-for="Service">Service <span>(optional)</span></label>
                <input asp-for="Service" />
            </div>
            <div id={styles.formContactMessage} className={`input-group ${styles.inputGroup}`}>
                <label asp-for="Message">Message</label>
                <span asp-validation-for="Message"></span>
                <textarea className={styles.textarea} asp-for="Message"></textarea>
            </div>
            <div className={styles.formButton}>
                <button className="btn btn-theme" type="submit">Send Contact Request</button>
            </div>
        </form>
    );
  }