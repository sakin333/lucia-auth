"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TabsSwitcherProps = {
  SignUpTab: React.ReactNode;
  LogInTab: React.ReactNode;
};

const TabsSwitcher = ({ SignUpTab, LogInTab }: TabsSwitcherProps) => {
  return (
    <Tabs defaultValue="log-in" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="log-in">Log In</TabsTrigger>
        <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
      </TabsList>

      <TabsContent value="log-in">{LogInTab}</TabsContent>
      <TabsContent value="sign-up">{SignUpTab}</TabsContent>
    </Tabs>
  );
};

export default TabsSwitcher;
