import React from "react";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
