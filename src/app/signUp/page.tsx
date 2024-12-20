import Header2 from "@/components/Header2";
import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  return (
    <main>
      <Header2 />
      <div
        className=" bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/homeimg/heropic.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Sign Up here</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Sign Up</span>
        </p>
      </div>

      {/* Main Sign Section */}
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-500"
              />
              <label className="ml-2 text-sm">Remember me?</label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-yellow-600"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center my-4">
            <p className="text-gray-600">Already have an account?</p>
            <Link
              href="/signIn"
              className="text-2xl font-medium text-orange-500 hover:underline"
            >
              Sign in here
            </Link>
          </div>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-600 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="flex items-center justify-center w-full border py-2 rounded-lg hover:bg-gray-50">
            <Image src="/Google.png" alt="Google" width={32} height={32} className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center w-full border py-2 rounded-lg hover:bg-gray-50 mt-2">
            <Image src="/Apple.png" alt="Apple" width={32} height={32} className="w-5 h-5 mr-2" />
            Sign up with Apple
          </button>
        </div>
      </div>
    </main>
  );
}
