import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs"
import { shadcn } from "@clerk/ui/themes"
import "@clerk/ui/themes/shadcn.css"
import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ClerkProvider appearance={{ theme: shadcn }}>
          <ThemeProvider>
            <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
              <Show when="signed-out">
                <SignInButton mode="modal" />
                <SignUpButton mode="modal" />
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
            {children}
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
