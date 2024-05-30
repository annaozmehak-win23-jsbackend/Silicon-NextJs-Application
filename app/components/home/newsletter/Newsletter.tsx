'use client'

import { FormEvent, useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [dailyNewsletter, setDailyNewsletter] = useState(false);
    const [advertisingUpdates, setAdvertisingUpdates] = useState(false);
    const [weekInReview, setWeekInReview] = useState(false);
    const [eventUpdates, setEventUpdates] = useState(false);
    const [startupsWeekly, setStartupsWeekly] = useState(false);
    const [podcasts, setPodcasts] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email,
            dailyNewsletter,
            advertisingUpdates,
            weekInReview,
            eventUpdates,
            startupsWeekly,
            podcasts
        }

        const res = fetch('https://newsletterprovider-silicon-win23-annaozmehak.azurewebsites.net/api/Subscribe?code=5CrZZO5rSPxQcqvGKfwv0Zzk0KgWZxytc6rkadfYe9-pAzFuekW0dw%3D%3D', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.status === 200) {
            setSuccess('You are now subscribed'); 
            } else {
            setError('Unable to subscribe right now. Try again.');
            }
        })
    }

    return (
        <section id={styles.newsletterSection} className="newsletter-section">
            <div className={`container ${styles.container}`}>
                <div className={styles.titleBox}>
                    <h3 className={styles.title}>Dont Want to Miss Anything?</h3>
                    <img src="images/arrows.svg" alt="Arrow" />
                </div>

                <form onSubmit={handleSubscribe} id={styles.newsletterForm} method="post">
                    <div className={styles.checkboxes}>
                        <p className={styles.signUpText}>Sign up for Newsletters</p>
                        <div className={styles.checkboxContainer}>
                            <div>
                                <input type='checkbox' name='dailyNewsletter' onChange={e => setDailyNewsletter(e.target.checked)} />
                                <label htmlFor='dailyNewsletter' className={styles.checkboxLabel}>Daily Newsletter</label>
                            </div>
                            <div className="checkbox">
                                <input type='checkbox' name='advertisingUpdates' onChange={e => setAdvertisingUpdates(e.target.checked)} />
                                <label htmlFor='advertisingUpdates'>Advertising Updates</label>
                            </div>
                        </div>
                        <div className="checkbox-container">
                            <div className="checkbox">
                                <input type='checkbox' name='weekInReview' onChange={e => setWeekInReview(e.target.checked)} />
                                <label htmlFor='weekInReview'>Week In Review</label>
                            </div>
                            <div className="checkbox">
                                <input type='checkbox' name="eventUpdates" onChange={e => setEventUpdates(e.target.checked)} />
                                <label htmlFor='eventUpdates'>Event Updates</label>
                            </div>
                        </div>
                        <div className="checkbox-container">
                            <div className="checkbox">
                                <input type='checkbox' name="startupsWeekly" onChange={e => setStartupsWeekly(e.target.checked)} />
                                <label htmlFor='startupsWeekly'>Startups Weekly</label>
                            </div>
                            <div className="checkbox">
                                <input type='checkbox' name="podcasts" onChange={e => setPodcasts(e.target.checked)} />
                                <label htmlFor='podcasts'>Podcasts</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.emailForm}>
                        <input className={styles.emailInput} type='email' name='email' placeholder='Your Email' onChange={e => setEmail(e.target.value)} />
                        <button className={`${styles.submitBtn} btn btn-theme`} type="submit">Subscribe*</button>
                    </div>
                    <span className={styles.terms}>* Yes, I agree to the <a href='' className={styles.termsLink}>terms</a> and <a href='' className={styles.termsLink}>privacy policy</a></span>
                </form>
            </div>
        </section>
    );
}
