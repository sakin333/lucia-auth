import SignOutButton from "@/components/sign-out-button";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  const user = await getUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <>
      <div>You are logged in as {user.name}</div>;
      <SignOutButton>Log Out</SignOutButton>
    </>
  );
};

export default Dashboard;
