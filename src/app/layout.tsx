import { AuthProvider } from "@/contexts/AuthContext";
import RedirectHandler from "./redirect-handler";

AuthProvider;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <AuthProvider>
          <RedirectHandler />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
