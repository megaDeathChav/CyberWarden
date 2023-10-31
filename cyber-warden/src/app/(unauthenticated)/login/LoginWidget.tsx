'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function LoginWidget() {
    
    const onSubmit = (e: FormData) => {
        const email = e.get("email")?.toString();
        const password = e.get("password")?.toString();

        signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
        });
    }

    return (
        <div className=" w-full mx-auto mt-4 bg-white rounded-2xl p-8 borde border-gray-300"> 
              {/* Stylized text **/}
              <div className="text-center mb-4">
                <p className="text-3xl font-extrabold text-black">Login </p>
                <p className="text-sm font-bold text-gray-600">to Cyberwarden</p>
              </div>
              <form action={ onSubmit } className="space-y-6">
                <div>
                  <label htmlFor="email" className="text-sm font-bold text-black block">Email</label>
                  <input type="text" name='email' id="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-bold text-black block">Password</label>
                  <input type="password" id="password" name='password' className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div>
                  {/* <Link href='/'> */}
                    <button type='submit' className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Proceed</button>
                  {/* </Link> */}
                </div>
                <div className="text-sm flex justify-center space-x-1 items-center">
                  <p>Don&apos;t have an account?</p>
                  <div className="bg-white hover:bg-stone-200 underline font-bold rounded-md text-blue-500 text-sm">
                    <Link href='/signup'>Create an Account </Link>
                  </div>
                </div>
              </form>
            </div>
    );    
}
