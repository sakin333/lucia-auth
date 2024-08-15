import TabsSwitcher from "@/components/tabs-switcher";
import React from "react";
import SignUpFrom from "./sign-up-form";
import LogInForm from "./log-in-form";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";

const AuthenticatePage = async () => {
  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="relative flex w-full h-screen bg-background">
      <div className="w-full max-w-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <TabsSwitcher SignUpTab={<SignUpFrom />} LogInTab={<LogInForm />} />
      </div>
    </div>
  );
};

export default AuthenticatePage;
