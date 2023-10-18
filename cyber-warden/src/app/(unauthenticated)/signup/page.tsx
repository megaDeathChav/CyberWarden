import Link from 'next/link';

export default function Signup(){

    return (
        <main className= "bg-gradient-to-t from-blue-gray-600 to-blue-gray-50 flex flex-col min-h-screen items-center justify-center">
            <div className="max-w-md w-full mx-auto mt-4 bg-white rounded-2xl p-8 borde border-gray-300">
              {/* Stylized text */}
              <div className="text-center mb-4">
                <p className="text-3xl font-extrabold text-black">Sign-Up </p>
                <p className="text-sm font-bold text-gray-600">to Cyberwarden</p>
              </div>
              <form action='' className="space-y-6">
                <div>
                  <label htmlFor="email" className="text-sm font-bold text-black block">Email</label>
                  <input name='email' type="text" id="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-bold text-black block">Password</label>
                  <input name='passwordOne' type="password" id="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                  {/*Password Requirement*/}
                  <ul className="text-xs text-gray-600 list-disc list-inside dark:text-gray-400">
                  <li>
                   At least 8 characters
                  </li>
                  <li>
                    At least one uppercase character
                  </li>
                  <li>
                    At least one special character, e.g., ! @ # ?
                  </li>
                  </ul>
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-bold text-black block">Confirm Password</label>
                  <input type="passwordTwo" id="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="text-m flex justify-center space-x-1 items-center">
                    {/* <Link href=''> <div className="flex justify-center items-center">Create Account</div></Link> */}
                    <button type='submit' className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Create Account</button>
                </div>
                <div className="text-sm flex justify-center space-x-1 items-center">
                  <div className="bg-white hover:bg-stone-200 underline font-bold rounded-md text-blue-500 text-sm">
                    <Link href='/login'>Already have an Account? </Link>
                  </div>
                </div>
              </form>
            </div>
        </main>
    )

}