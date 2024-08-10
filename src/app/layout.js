import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "./components/Navbar";

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
        
    

      <body className={inter.className}>
        
     <Navbar></Navbar>

        {children}



      <footer>
        this is bd
      </footer>


      </body>
    </html>
  );
}
