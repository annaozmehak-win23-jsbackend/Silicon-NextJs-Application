'use client'

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Confirm() {
    const router = useRouter();
    const email = useSearchParams().get('email');
    const [error, setError] = useState<string>('');
    const [code, setCode] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            let form = {email, code};
            const res = await fetch('https://verificationprovider-silicon-win23-annaozmehak.azurewebsites.net/api/validate?code=XbTRZ5D2gwKytzdFQDx_-mr4Jbjuoi4e8_bsJXkfpQpyAzFuDiiqvg==', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (res.status === 200) {
                router.push('/signin');
            }
            else {
                let result = await res.json();
                setError(result.error);
            }
        }
        catch (error) {
            setError("Something went wrong, please try again later.");
        }
    }

    return (
     <div className="confirm">
        <div className="container">
            {error && <div className='alert alert-danger'>{error}</div>}
            <div className="alert alert-danger">
                <form onSubmit={handleSubmit} noValidate>
                    <h1>Confirm your account</h1>
                    <p>Don't get an verification code? <Link href="/resend">Resend here</Link></p>

                    <div className="form-content">
                        <div id="form-code" className="input-group">
                            <label>Verification code</label>
                            <input value={code} onChange={(e => setCode(e.target.value))} type="text" name="code" placeholder="Enter your verification code" />
                        </div>
                        <div id="form=button">
                            <button type="submit" className="btn btn-theme"><i className="fa-regular fa-check-double"></i>Verify code</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     </div>
    );
  }