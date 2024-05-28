import styles from './AccountDetailsAddressInfoForm.module.css';

export default function AccountDetailsAddressInfoForm() {
    return (
        <section className={styles.addressInfo}>
        <form id={styles.addressInfoForm} method="post" asp-controller="Account" asp-action="Details">
            <h5 className={styles.formTitle}>Address</h5>
    
            <div className={styles.content}>
                <div id={styles.formAddressline1} className="input-group">
                    <label htmlFor='addressLine_1'>Address line 1</label>
                    <input type='text' name='addressLine_1' />
                </div>
                <div id={styles.formAddressline2} className="input-group">
                    <label htmlFor='addressLine_2'>Address line 2 (optional)</label>
                    <input type='text' name='addressLine_2' />
                </div>
                <div id={styles.postalCode} className="input-group">
                    <label htmlFor='postalCode'>Postal code</label>
                    <input type='text' name='postalCode' />
                </div>
                <div id={styles.city} className="input-group">
                    <label htmlFor='city'>City</label>
                    <input type='text' name='city' />
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