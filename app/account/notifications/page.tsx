'use client'

import { useState, FormEvent, ChangeEvent, useRef } from "react";
import AccountAside from "../../components/accountAside/AccountAside";
import styles from './Notifications.module.css';


export default function AccountDetails() {
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const checkboxRef = useRef<HTMLInputElement | null>(null);
    const [subscribeForm, setSubscribeForm] = useState({
        email: ''
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSubscribeForm(data => ({ ...data, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const url = checkboxRef.current?.checked
        ? 'https://newsletterprovider-silicon-win23-annaozmehak.azurewebsites.net/api/Subscribe?code=5CrZZO5rSPxQcqvGKfwv0Zzk0KgWZxytc6rkadfYe9-pAzFuekW0dw%3D%3D'
        : 'https://newsletterprovider-silicon-win23-annaozmehak.azurewebsites.net/api/UnSubscribe?code=VqznU5w3x0sagOJvE_rOhM6MtbH-JJ4sXA5hpFK2TbktAzFu5Y4zPA%3D%3D';

        console.log(subscribeForm)
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscribeForm)
        });

        if (res.ok) {
            setSuccess(`You are now ${checkboxRef.current?.checked ? 'subscribed' : 'unsubscribed'}.`);
        } else if (res.headers.get('content-type')?.includes('application/json')) {
            let result = await res.json();
            setError(result.error);
        } else {
            setError('An error occurred. Please try again.');
        }
    }

    return (
        <div className={styles.accountSavedItems}>
            <div className={`container ${styles.container}`}>
            
                <AccountAside />
                <form onSubmit={handleSubmit} className={styles.content}>
                    {success && <div className='alert alert-success'>{success}</div>}
                    {error && <div className='alert alert-danger'>{error}</div>}
                    <div>
                        <h1>Notifications</h1>
                        <p>Preferred email for notications</p>
                        <div className="input-group">
                            <input value={subscribeForm.email} onChange={onChange} name="email" type="email" id={`email ${styles.emailInput}`} placeholder="example@gmail.com" />   
                        </div>

                        <div className={styles.toggleBtnBox}>
                            <div className="btn-switch">
                                <label className="switch" htmlFor="newsletter-subscribe">
                                    <input ref={checkboxRef} type="checkbox" id="newsletter-subscribe" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className={styles.textBox}>
                                <h3 className={styles.toggleBtnTitle}>Subscribe to Newsletter</h3>
                                <p className={styles.toggleBtnDescription}>Nec,posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.</p>
                            </div>
                        </div>

                        <div className={styles.toggleBtnBox}>
                            <div className="btn-switch">
                                <label className="switch" htmlFor="dark-mode">
                                    <input type="checkbox" id="dark-mode" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className={styles.textBox}>
                                <h3 className={styles.toggleBtnTitle}>Use Dark Mode Theme in Application</h3>
                                <p className={styles.toggleBtnDescription}>Tortor massa porttitor enim tristique neque fermentum sed.</p>
                            </div>
                        </div>
                    </div>
                    
                   
                   <div className={styles.notificationBtns}>
                        <button className="btn btn-gray" type="reset">Cancel</button>
                        <button className="btn btn-theme" type="submit">Save changes</button>
                   </div>
                </form>
            </div>    
        </div>
    );
}