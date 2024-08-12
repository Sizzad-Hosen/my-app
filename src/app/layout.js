import { Inter } from "next/font/google";
import "./globals.css";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import Navbar from "./components/Navbar";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Next Hero",
    template:"%s | Next Hero",
    

  },
  description:"Super Power Next Js Web",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        
    
<AuthProvider>

      <body className={inter.className}>
        
     <Navbar></Navbar>

        {children}



      <footer>
        this is bd
      </footer>


      </body>

 </AuthProvider>

    </html>
  );
}
