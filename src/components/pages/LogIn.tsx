import { Apple } from "lucide-react";
import SignInForm from "../forms/SignInForm";

const LogIn = () => {
    return (
        <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <a href="/" className="flex">
                <Apple className="mr-2"/>
                Bem-Estar
            </a>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight mb-8 text-green-600">
                Acesse sua conta
              </h1>
              <SignInForm/>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default LogIn;
