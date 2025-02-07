import Header2 from "../../components/Header2";
import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  return (
    <main>
      <Header2 />
      <div
        className=" bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/homeimg/heropic.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Sign In here</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Sign In</span>
        </p>
      </div>

      {/* Main Sign Section */}
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
          <form className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-500"
            >
              Sign In
            </button>
          </form>
          <div className="text-center my-4">
            <p className="text-gray-600">Don&apos;t have an account?</p>
            <Link
              href="/signUp"
              className="text-2xl font-medium text-orange-500 hover:underline"
            >
              Sign up here
            </Link>
          </div>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-600 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="flex items-center justify-center w-full border py-2 rounded-lg hover:bg-gray-50">
            <Image src="/Google.png" alt="Google" width={32} height={32} className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center w-full border py-2 rounded-lg hover:bg-gray-50 mt-2">
            <Image src="/Apple.png" alt="Apple" width={32} height={32} className="w-5 h-5 mr-2" />
            Sign in with Apple
          </button>
        </div>
      </div>
    </main>
  );
}