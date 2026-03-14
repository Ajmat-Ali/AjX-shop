import React from "react";

const Login = () => {
  const handleSubmit = () => {};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-4 shadow-lg">
              {/* <Lock className="w-7 h-7 text-white" /> */}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-300 text-sm">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                {/* <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" /> */}
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Password
              </label>
              <div className="relative">
                {/* <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" /> */}
                <input
                  id="password"
                  //   type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  //   value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-200 transition"
                >
                  {/* {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )} */}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  //   checked={rememberMe}
                  //   onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/10 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="ml-2 text-sm text-gray-300">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Sign In
              {/* <ArrowRight className="w-5 h-5" /> */}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-800 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 rounded-lg border border-white/20 transition duration-300 transform hover:scale-105">
              Google
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 rounded-lg border border-white/20 transition duration-300 transform hover:scale-105">
              GitHub
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-medium transition"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
