'use server'

import { cookies } from "next/headers";

type ActionTypes = {
    success: boolean;
    error?: string | undefined;
}

export default async function signInActions(currentState: any, formData: FormData) : Promise<ActionTypes> {
    console.log('signInActions called');
    const email = formData.get('email') as  string;
    const password = formData.get('password') as string;
    const isPersistent = formData.get('isPersistent') === 'on';

    const signInFormData = {email, password, isPersistent};

    try {
        const res = await fetch('https://accountprovider-silicon-win23-annaozmehak.azurewebsites.net/api/SignIn?code=mj2pr7k6DHjkQuv2Zeuy7faw3XJViBC4J94Giw5ECWIJAzFutZwDGw==', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signInFormData)
        });
        console.log(signInFormData);

        if (res.status === 200) {
            const result = await res.json();

            // cookies().set('Authorization', result.token, {
            //     secure: true,
            //     httpOnly: true,
            //     expires: Date.now() + 24 * 60 * 60 * 1000 * 1,
            //     path: '/',
            //     sameSite: 'strict'
            // });
            return {success: true};
        }
        else {
            const result = await res.json();
            console.log(result);
            return {success: false, error: result.error};
        }
    }
    catch (error) {
        console.error(error);
        return {success: false, error: "Unable to sign in right now. Please try again later."};
    }
}