"use client";

import Button from "@/app/components/buttons/Button";
import Input from "@/app/components/inputs/Input";
import React, { useCallback, useState } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import AuthSocialButton from "../AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER"; //Setting the type of variant for typescript

function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN"); // way of writing type for states
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]); // function for toggle variant

  const {
    register, // for register from react hook form
    handleSubmit, // for submitting
    formState: { errors }, // for error handling
  } = useForm<FieldValues>({
    // need to write fieldvalues as type for useForm
    defaultValues: {
      //default values for register and login
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      // Axios Register
    }
    if (variant === "LOGIN") {
      //NextAuth Sign in
    }
  };

  const socialAction = (action: string) => {
    // action :  type of string
    setIsLoading(true);

    //NextAuth Social Sign in
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}

          <Input
            id="email"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white">or continue with</span>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <AuthSocialButton icon={BsGithub} onClick={() => socialAction("github")} />
            <AuthSocialButton icon={BsGoogle} onClick={() => socialAction("google")} />
          </div>
        </div>
        {/* HandleSubmit wraps onSubmit function because we need to pass default values in onSubmit function which we can only get from handleSubmit function of react hook form */}

        <div className="flex justify-center gap-2 px-2 mt-6 text-sm text-gray-500">
          {variant === "LOGIN" ? "New to Messenger?" : "Already have an account?"}
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
