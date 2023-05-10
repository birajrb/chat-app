import Image from "next/image";
import AuthForm from "./components/AuthForm/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-full py-12 bg-gray-100 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height={32}
          width={32}
          className="w-auto mx-auto"
          src="/images/logo.png"
        />
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-center text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {/* Authentication Form */}
      <AuthForm />
    </div>
  );
}
