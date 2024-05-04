import AccountAside from "../components/accountAside/AccountAside";
import DeleteAccountForm from "../components/accountSecurityDeleteAccountForm/DeleteAccountForm";
import ChangePasswordForm from "../components/accountSecurityPasswordForm/ChangePasswordForm";
import styles from './AccountSecurity.module.css';


export default function AccountSecurity() {
    return (
    <div className={styles.accountSecurity}>
        <div className={`container ${styles.container}`}>
            <AccountAside />
            <div className={styles.details}>
                <section>
                   <ChangePasswordForm />
                </section>
                <section className={styles.deleteAccount}>
                    <DeleteAccountForm />
                </section>
            </div>
        </div>
        
    </div>
    );
}