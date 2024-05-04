import styles from "./AccountDetailsBasicInfoForm.module.css";

export default function AccountDetailsBasicInfoForm() {
    return (
        <section>
        <form className={styles.basicInfoForm} method="post" asp-controller="Account" asp-action="Details">
            <h1 className={styles.pageTitle}>Account Details</h1>
            <h5 className={styles.formTitle}>Basic Info</h5>
    
            <div className={styles.content}>
                <div id={styles.formFirstname} className="input-group">
                    <label asp-for="BasicInfo!.FirstName"></label>
                    {/* @if (!Model.IsExternalAccount)
                    { */}
                        <span asp-validation-for="BasicInfo!.FirstName"></span>
                        <input asp-for="BasicInfo!.FirstName" />
             {/*         }
                     else
                     { */}
                         {/* <input asp-for="BasicInfo!.FirstName" /> */}
                  {/*    } */}
                </div>
                <div id={styles.formLastname} className="input-group">
                    <label asp-for="BasicInfo!.LastName"></label>
                    {/* @if (!Model.IsExternalAccount)
                    { */}
                        <span asp-validation-for="BasicInfo!.LastName"></span>
                        <input asp-for="BasicInfo!.LastName" />
                    {/* }
                    else
                    { */}
                        {/* <input asp-for="BasicInfo!.LastName" readonly />
                    } */}
                </div>
                <div id={styles.formEmail} className="input-group">
                    <label asp-for="BasicInfo!.Email"></label>
                    {/* @if (!Model.IsExternalAccount)
                    { */}
                        <span asp-validation-for="BasicInfo!.Email"></span>
                        <input asp-for="BasicInfo!.Email" />
                    {/* }
                    else
                    { */}
                        {/* <input asp-for="BasicInfo!.Email" /> */}
                    {/* } */}
                </div>
                <div id={styles.formPhone} className="input-group">
                    <label asp-for="BasicInfo!.Phone"></label>
                    <span asp-validation-for="BasicInfo!.Phone"></span>
                    <input asp-for="BasicInfo!.Phone" />
                </div>
                <div id={styles.formBio} className="input-group">
                    <label asp-for="BasicInfo!.Biography">Bio <span className={styles.span}>(optional)</span></label>
                    <textarea asp-for="BasicInfo!.Biography"></textarea>
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