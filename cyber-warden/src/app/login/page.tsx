export default function login(){

    return (
        <main>
            <div className="max-w-md w-full mx-auto mt-4 bg-white rounded-2xl p-8 border border-gray-300">
              {/* Stylized text */}
              <div className="text-center mb-4">
                <p className="text-3xl font-extrabold text-black">Login </p>
                <p className="text-sm font-bold text-gray-600">to Cyberwarden</p>
              </div>
              <form action="" className="space-y-6">
                <div>
                  <label htmlFor="email" className="text-sm font-bold text-black block">Email</label>
                  <input type="text" id="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-bold text-black block">Password</label>
                  <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" id="rememberMe" className="h-4 w-4 text-blue-300 rounded" />
                    <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-500">Remember me</label>
                  </div>
                  <a href="" className="font-medium text-sm text-gray-500">Forgot Password?</a>
                </div>
                <div>
                  <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Proceed</button>
                </div>
              </form>
            </div>
        </main>
    )

}