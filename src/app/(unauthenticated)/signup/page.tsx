import Link from 'next/link';
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { signIn, signOut } from 'next-auth/react';
import  SignupWidget  from './SignupWidget';

export default async function Signup() {
    const session = await getServerSession(authOptions);


    return (
        <main className="w-unit-8xl">
            <pre>{JSON.stringify(session)}</pre>
            <SignupWidget/>
        </main>
    )

}
