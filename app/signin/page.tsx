'use client'

import styles from './SignIn.module.css';
import { useFormState } from 'react-dom';
import signInAction from './signInAction';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function SignIn() {
    const [signInForm, setSignInForm] = useFormState(signInAction, { success: false });
    const router = useRouter();

    useEffect(() => {
        if (signInForm.success) {
            router.push('/account/details');
        }
    }, [signInForm]);


    return (
        <div id={styles.signin}>
            <div className={`container ${styles.container}`}>

                {signInForm?.error && <div className='alert alert-danger'>{signInForm?.error}</div>}
        
                <form action={setSignInForm} className={styles.signInForm} noValidate>
                    <h1 className={styles.title}>Welcome Back</h1>
                    <p>Don't have an account yet? <a className={styles.createAccountLink} href='/signup'>Sign up here</a>.</p>
        
                    <div className={styles.content}>
                        <div id={styles.formEmail} className="input-group">
                            <label>Email</label>
                            <input name='email' type='email' />
                        </div>
                        <div id={styles.formPassword} className="input-group">
                            <label>Password</label>
                            <input name='password' type='password' />
                        </div>
                        <div id={styles.formRemember} className="checkbox">
                            <div className="checkbox-group">
                                <input type="checkbox" name='isPresistent' />
                                <label>Remember me</label>
                            </div>
        
                        </div>
                        <button id="form-submit" className="btn btn-theme-s" type="submit">Sign in</button>
                        <a id={styles.formForgotPassword} href='/forgotPassword'>Forgot your password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
  }
  