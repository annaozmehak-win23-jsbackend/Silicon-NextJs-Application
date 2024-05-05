import AccountAside from "../../components/accountAside/AccountAside";
import styles from './Notifications.module.css';


export default function AccountDetails() {
    return (
        <div className={styles.accountSavedItems}>
            <div className={`container ${styles.container}`}>
                <AccountAside />
                <div className={styles.content}>
                    <div>
                        <h1>Notifications</h1>
                        <p>Preferred email for notications</p>
                        <div className="input-group">
                            <input type="email" id={`email ${styles.emailInput}`} placeholder="example@gmail.com" />   
                        </div>

                        <div className={styles.toggleBtnBox}>
                            <div className="btn-switch">
                                <label className="switch" htmlFor="newsletter-subscribe">
                                    <input type="checkbox" id="newsletter-subscribe" />
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
                </div>
            </div>    
        </div>
    );
}