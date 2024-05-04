import AccountAside from "../../components/accountAside/AccountAside";
import AccountDetailsAddressInfoForm from "../../components/accountDetailsAddressInfoForm/AccountDetailsAddressInforForm";
import AccountDetailsBasicInfoForm from "../../components/accountDetailsBasicInfoForm/AccountDetailsBasicInfoForm";
import styles from './AccountDetails.module.css';


export default function AccountDetails() {
    return (
    <div className={styles.accountDetails}>
        <div className={`container ${styles.container}`}>
            <AccountAside />
            <div className={styles.details}>
                    <AccountDetailsBasicInfoForm />

                    <hr />

                    <AccountDetailsAddressInfoForm />
            </div>
        </div>
        
    </div>
    );
}