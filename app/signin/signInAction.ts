'use server'

import { cookies } from "next/headers";

type ActionTypes = {
    success: boolean;
    error?: string | undefined;
}

export default async function signInActions(currentState: any, formData: FormData) : Promise<ActionTypes> {
    const email = formData.get('email');
    const password = formData.get('password');
    const isPersistent = formData.get('isPersistent');

    const signInFomData = {email, password, isPersistent: isPersistent ? isPersistent : false};

    try {
        const res = await fetch('https://accountprovider-silicon-win23-annaozmehak.azurewebsites.net/api/SignIn?code=mj2pr7k6DHjkQuv2Zeuy7faw3XJViBC4J94Giw5ECWIJAzFutZwDGw==', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signInFomData)
        });

        if (res.status === 200) {
            const result = await res.json();
            
            cookies().set('Authorization', result.token, {
                secure: true,
                httpOnly: true,
                expires: Date.now() + 24 * 60 * 60 * 1000 * 1,
                path: '/',
                sameSite: 'strict'
            });
            return {success: true};
        }
        else {
            const result = await res.json();
            return {success: false, error: result.error};
        }
    }
    catch (error) {
        return {success: false, error: "Unable to sign in right now. Please try again later."};
    }
}