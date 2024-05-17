'use client'

import styles from './SignIn.module.css';
import { useFormState } from 'react-dom';
import signInAction from './signInAction';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';


export default function SignIn() {
    const [error, setError] = useState<string>('');
    const [signInForm, setSignInForm] = useState({
        email: '',
        password: '',
    });
    const router = useRouter();

    // useEffect(() => {
    //     if (signInForm.success) {
    //         router.push('/account/details');
    //     }
    // }, [signInForm]);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignInForm(data => ({ ...data, [e.target.name]: e.target.value }));
    }
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        console.log(signInForm);
        const res = await fetch('https://accountprovider-silicon-win23-annaozmehak.azurewebsites.net/api/SignIn?code=mj2pr7k6DHjkQuv2Zeuy7faw3XJViBC4J94Giw5ECWIJAzFutZwDGw%3D%3D', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signInForm)
        });
    
        if (res.ok) {
            router.push('/account/details');
        } else {
            setError('Invalid email or password.');
        }
    }

    return (
        <div id={styles.signin}>
            <div className={`container ${styles.container}`}>

                {error && <div className='alert alert-danger'>{error}</div>}
        
                <form onSubmit={handleSubmit} className={styles.signInForm} noValidate>
                    <h1 className={styles.title}>Welcome Back</h1>
                    <p>Don't have an account yet? <a className={styles.createAccountLink} href='/signup'>Sign up here</a>.</p>
        
                    <div className={styles.content}>
                        <div id={styles.formEmail} className="input-group">
                            <label>Email</label>
                            <input value={signInForm.email} onChange={onChange} name='email' type='email' />
                        </div>
                        <div id={styles.formPassword} className="input-group">
                            <label>Password</label>
                            <input value={signInForm.password} onChange={onChange} name='password' type='password' />
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
  