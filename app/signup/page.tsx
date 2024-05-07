import styles from './SignUp.module.css';

export default function SignUp() {
    return (
        <section id="signup">
            <div className={`container ${styles.container}`}>
                <form className={styles.signUpForm} method="post" asp-controller="Auth" asp-action="SignUp" noValidate>
                    <h1 className={styles.title}>Create Account</h1>
                    <p>Already have an account? <a className={styles.signInLink} href='/signin'>Sign in here</a>.</p>
        
                    <div className={styles.content}>
                        <div id={styles.formFirstName} className="input-group">
                            <label asp-for="FirstName">First name</label>
                            <span asp-validation-for="FirstName"></span>
                            <input asp-for="FirstName" type='text' placeholder='Enter your first name' />
                        </div>
                        <div id={styles.formLastName} className="input-group">
                            <label asp-for="LastName">Last name</label>
                            <span asp-validation-for="LastName"></span>
                            <input asp-for="LastName" type='text' placeholder='Enter your last name' />
                        </div>
                        <div id={styles.formEmail} className="input-group">
                            <label asp-for="Email">Email</label>
                            <span asp-validation-for="Email"></span>
                            <input asp-for="Email" type='email' placeholder='Enter your email' />
                        </div>
                        <div id={styles.formPassword} className="input-group">
                            <label asp-for="Password">Password</label>
                            <span asp-validation-for="Password"></span>
                            <input asp-for="Password" type='password' />
                        </div>
                        <div id={styles.formConfirm} className="input-group">
                            <label asp-for="ConfirmPassword">Confirm Password</label>
                            <span asp-validation-for="ConfirmPassword"></span>
                            <input asp-for="ConfirmPassword" type='password' data-val-equalto-other="Password" />
                        </div>
                        <div id={styles.formTerms} className="checkbox">
                            <div className="checkbox-group">
                                <input type='checkbox' asp-for="TermsAndConditions" />
                                <label asp-for="TermsAndConditions">I agree to the <a className={styles.termsLink} href='/terms'>Terms</a> & <a className={styles.termsLink} href='/conditions' >Conditions</a></label>
                            </div>
                            <span asp-validation-for="TermsAndConditions"></span>
                        </div>
                    </div>
                    <button id="form-submit" className="btn-theme-s" type="submit">Sign up</button>
                </form>
            </div>
        </section>
    );
  }