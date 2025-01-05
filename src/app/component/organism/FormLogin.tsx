export default function FormLogin() {
  return (
    <div className="grid gap-4 md:w-[25rem] w-[20rem] rounded-xl outline">
      <div className="grid gap-4">
        <h1 className="text-2xl text-blue-700 font-bold">Create an account</h1>
        <p className="text-sm text-slate-500">
          Sign up now and unlock exclusive access!
        </p>
      </div>
      <form action="" method="post" className="grid gap-3">
        {/* Username */}
        <div className="flex flex-col">
          <label htmlFor="username" className="font-bold">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Input your username"
            className="placeholder:text-xs outline-none py-3 px-2 bg-gray-100 border border-gray-400 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type="text"
              id="password"
              placeholder="input your password"
              className="placeholder:text-xs border bg-gray-100 focus:bg-white border-gray-400 py-3 px-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
            />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="www.example667@gmail.com"
            className="placeholder:text-xs outline-none py-3 px-2 bg-gray-100 border border-gray-400 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-bold">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            placeholder="62810182737"
            className="placeholder:text-xs outline-none py-3 px-2 bg-gray-100 border border-gray-400 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            />
        </div>
      </form>
    </div>
  );
}
