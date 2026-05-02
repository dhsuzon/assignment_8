import {Poppins} from "next/font/google";
import "./globals.css";


import Navbar from "@/components/navbar/Navbar";



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
        </body>
    </html>
  );
}
