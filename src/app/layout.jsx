import {Poppins} from "next/font/google";
import "./globals.css";


import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";



const poppins = Poppins({
  subsets:["latin"],
  weight:['100','400','500','600','700','800','900']
})



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
  
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Toaster position="top-center" reverseOrder={false}/>
         <Footer/>
        </body>
    </html>
  );
}
