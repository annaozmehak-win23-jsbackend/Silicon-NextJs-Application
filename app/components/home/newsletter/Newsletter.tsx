import styles from './Newsletter.module.css';

export default function Newsletter() {
  return (
        <section id={styles.newsletterSection} className="newsletter-section">
            <div className={`container ${styles.container}`}>
                <div className={styles.titleBox}>
                    <h3 className={styles.title}>Dont Want to Miss Anything?</h3>
                    <img src="images/arrows.svg" alt="Arrow" />
                </div>

                <form id={styles.newsletterForm} method="post" asp-action="Index" asp-controller="Home">
                    <div className={styles.checkboxes}>
                        <p className={styles.signUpText}>Sign up for Newsletters</p>
                        <div className={styles.checkboxContainer}>
                            <div>
                                <input type='checkbox' asp-for="DailyNewsletter" />
                                <label className={styles.checkboxLabel}>Daily Newsletter</label>
                            </div>
                            <div className="checkbox">
                                <input type='checkbox' asp-for="AdvertisingUpdates" />
                                <label>Advertising Updates</label>
                            </div>
                        </div>
                        <div className="checkbox-container">
                            <div className="checkbox">
                                <input type='checkbox' asp-for="WeekInReview" />
                                <label>Week In Review</label>
                            </div>
                            <div className="checkbox">
                                <input type='checkbox' asp-for="EventUpdates" />
                                <label>Event Updates</label>
                            </div>
                        </div>
                        <div className="checkbox-container">
                            <div className="checkbox">
                                <input type='checkbox' asp-for="StartupsWeekly" />
                                <label>Startups Weekly</label>
                            </div>
                            <div className="checkbox">
                                <input type='checkbox' asp-for="Podcasts" />
                                <label>Podcasts</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.emailForm}>
                        <input className={styles.emailInput} asp-for="Email" placeholder='Your Email' />
                        <span asp-validation-for="Email"></span>
                        <button className={`${styles.submitBtn} btn btn-theme`} type="submit">Subscribe*</button>
                    </div>
                    <span className={styles.terms}>* Yes, I agree to the <a href='' className={styles.termsLink}>terms</a> and <a href='' className={styles.termsLink}>privacy policy</a></span>
                </form>
            </div>
        </section>
  );
}
