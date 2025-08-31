"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthSessionProvider>   
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
    </NextAuthSessionProvider>
  );
}
