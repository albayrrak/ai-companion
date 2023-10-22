import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = (props: AuthLayoutProps) => {
  return <div className="flex items-center justify-center h-full">{props.children}</div>;
};

export default AuthLayout;
