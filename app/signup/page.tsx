'use client'

import { useRouter } from 'next/navigation';
import styles from './SignUp.module.css';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

export default function SignUp() {
    const router = useRouter();
    const [error, setError] = useState<string>('');
    const checkboxRef = useRef<HTMLInputElement | null>(null);

    const [signUpForm, setSignUpForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignUpForm(data => ({ ...data, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!checkboxRef.current?.checked) {
            setError("You must agree to the terms and conditions.");
            return;
        }

        const { confirmPassword, ...dataToSend } = signUpForm;

        const res = await fetch('https://accountprovider-silicon-win23-annaozmehak.azurewebsites.net/api/SignUp?code=dWZLKstxLQ9cWX5NrYVpyJGhKre-gWWouxRHY7SUtq8nAzFuaRL06Q==', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        if (res.ok) {
            router.push('/signin');
        } else if (res.headers.get('content-type')?.includes('application/json')) {
            let result = await res.json();
            setError(result.error);
        } else {
            setError('An error occurred. Please try again.');
        }
    }

    return (
        <section id="signup">
            <div className={`container ${styles.container}`}>
                {error && <div className='alert alert-danger'>{error}</div>}

                <form onSubmit={handleSubmit} className={styles.signUpForm} method="post" noValidate>
                    <h1 className={styles.title}>Create Account</h1>
                    <p>Already have an account? <a className={styles.signInLink} href='/signin'>Sign in here</a>.</p>
        
                    <div className={styles.content}>
                        <div id={styles.formFirstName} className="input-group">
                            <label>First name</label>
                            <input value={signUpForm.firstName} onChange={onChange} type='text' name='firstName' placeholder='Enter your first name' />
                        </div>
                        <div id={styles.formLastName} className="input-group">
                            <label>Last name</label>
                            <input value={signUpForm.lastName} onChange={onChange} type='text' name='lastName' placeholder='Enter your last name' />
                        </div>
                        <div id={styles.formEmail} className="input-group">
                            <label>Email</label>
                            <input value={signUpForm.email} onChange={onChange} type='email' name='email' placeholder='Enter your email' />
                        </div>
                        <div id={styles.formPassword} className="input-group">
                            <label>Password</label>
                            <input value={signUpForm.password} onChange={onChange} name='password' type='password' />
                        </div>
                        <div id={styles.formConfirm} className="input-group">
                            <label>Confirm Password</label>
                            <input onChange={onChange} type='password' name='confirmPassword' />
                        </div>
                        <div id={styles.formTerms} className="checkbox">
                            <div className="checkbox-group">
                                <input ref={checkboxRef} type='checkbox' name='terms' />
                                <label>I agree to the <a className={styles.termsLink} href='/terms'>Terms</a> & <a className={styles.termsLink} href='/conditions' >Conditions</a></label>
                            </div>
                        </div>
                    </div>
                    <button id="form-submit" className="btn-theme-s" type="submit">Sign up</button>
                </form>
            </div>
        </section>
    );
  }