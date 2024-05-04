import styles from './AccountDetailsAddressInfoForm.module.css';

export default function AccountDetailsAddressInfoForm() {
    return (
        <section className={styles.addressInfo}>
        <form id={styles.addressInfoForm} method="post" asp-controller="Account" asp-action="Details">
            <h5 className={styles.formTitle}>Address</h5>
    
            <div className={styles.content}>
                <div id={styles.formAddressline1} className="input-group">
                    <label asp-for="AddressInfo!.AddressLine_1"></label>
                    <span asp-validation-for="AddressInfo!.AddressLine_1"></span>
                    <input asp-for="AddressInfo!.AddressLine_1" />
                </div>
                <div id={styles.formAddressline2} className="input-group">
                    <label asp-for="AddressInfo!.AddressLine_2"></label>
                    <span className={styles.span} asp-validation-for="AddressInfo!.AddressLine_2"></span>
                    <input asp-for="AddressInfo!.AddressLine_2" />
                </div>
                <div id={styles.postalCode} className="input-group">
                    <label asp-for="AddressInfo!.PostalCode"></label>
                    <span asp-validation-for="AddressInfo!.PostalCode"></span>
                    <input asp-for="AddressInfo!.PostalCode" />
                </div>
                <div id={styles.city} className="input-group">
                    <label asp-for="AddressInfo!.City"></label>
                    <span asp-validation-for="AddressInfo!.City"></span>
                    <input asp-for="AddressInfo!.City" />
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