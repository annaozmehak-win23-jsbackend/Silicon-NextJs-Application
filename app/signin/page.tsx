import styles from './SignIn.module.css';

export default function SignIn() {
    return (
        <div id={styles.signin}>
            <div className={`container ${styles.container}`}>
        
                <form className={styles.signInForm} method="post" noValidate>
                    <h1 className={styles.title}>Welcome Back</h1>
                    <p>Don't have an account yet? <a className={styles.createAccountLink} href='/signup'>Sign up here</a>.</p>
        
                    <div className={styles.content}>
                        <div id={styles.formEmail} className="input-group">
                            <label asp-for="Email">Email</label>
                            <span asp-validation-for="Email"></span>
                            <input asp-for="Email" type='email' />
                        </div>
                        <div id={styles.formPassword} className="input-group">
                            <label asp-for="Password">Password</label>
                            <span asp-validation-for="Password"></span>
                            <input asp-for="Password" type='password' />
                        </div>
                        <div id={styles.formRemember} className="checkbox">
                            <div className="checkbox-group">
                                <input type="checkbox" asp-for="RememberMe" />
                                <label asp-for="RememberMe">Remember me</label>
                            </div>
        
                        </div>
                        <button id="form-submit" className="btn btn-theme-s" type="submit">Sign in</button>
                        <a id={styles.formForgotPassword} href='/forgotPassword'>Forgot your password?</a>
        
                        {/* <div id="external-providers">
                            <h6>Or sign in with your social network</h6>
                            <div className="providers">
                                <a className="btn-gray" asp-action="Google" asp-controller="Auth"><i className="fa-brands fa-google"></i> Google</a>
                                <a className="btn-gray" asp-action="Facebook" asp-controller="Auth"><i className="fa-brands fa-facebook"></i> Facebook</a>
                            </div>
                        </div> */}
                    </div>
                </form>
            </div>
        </div>
    );
  }
  