import React, { useState } from "react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl mb-4 shadow-lg">
              {/* <User className="w-7 h-7 text-white" /> */}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-gray-300 text-sm">
              Join us today and get started
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                {/* <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" /> */}
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  //   value={formData.fullName}
                  //   onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-300"
                />
              </div>
            </div>

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
                  name="email"
                  placeholder="name@example.com"
                  //   value={formData.email}
                  //   onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-300"
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  //   value={formData.password}
                  //   onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-300"
                />
                <button
                  type="button"
                  //   onClick={() => setShowPassword(!showPassword)}
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

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                {/* <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" /> */}
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  //   value={formData.confirmPassword}
                  //   onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-300"
                />
                <button
                  type="button"
                  //   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-200 transition"
                >
                  {/* {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )} */}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            {formData.password && (
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-xs font-semibold text-gray-300 mb-3">
                  Password Requirements:
                </p>
                <div className="space-y-2">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle
                        className={`w-4 h-4 ${
                          req.met ? "text-emerald-400" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={`text-xs ${req.met ? "text-gray-300" : "text-gray-500"}`}
                      >
                        {req.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Terms & Conditions */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeTerms"
                // checked={formData.agreeTerms}
                // onChange={handleChange}
                className="w-4 h-4 mt-0.5 rounded border-white/20 bg-white/10 text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-500"
              />
              <span className="text-xs text-gray-300">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              //   disabled={!formData.agreeTerms}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-600 disabled:opacity-50 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300 transform hover:scale-105 shadow-lg mt-6"
            >
              Create Account
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
                Or sign up with
              </span>
            </div>
          </div>

          {/* Social Sign Up */}
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
            Already have an account?{" "}
            <a
              href="#"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
