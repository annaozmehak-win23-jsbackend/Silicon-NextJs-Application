import ContactForm from "../components/contact/ContactForm";
import ContactOptions from "../components/contact/ContactOptions";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section id={styles.contact}>
            <div className={`container ${styles.container}`}>
                <div className={styles.breadcrumbs}>
                    <p className={styles.homePage}><i className="fa-solid fa-house icon"></i> Home</p>
                    <i className="fa-solid fa-angles-right icon"></i>
                    <p className={styles.currentPage}>Contact</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.leftContainer}>
                        <div className={styles.titleBox}>  
                            <h1 className={styles.title}>Contact us</h1>
                         </div>
                        <ContactOptions />
                    </div>

                    <div className={styles.formContainer}>
                        <ContactForm />
                    </div>
                </div>  
            </div>
                <div className={styles.map}>
                    <img className={styles.mapImg} src="images/contact-map.svg" alt="Map of the company location" />
                </div>
        </section>
    );
}
  