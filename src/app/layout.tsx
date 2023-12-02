import "@/app/globals.css";
import Link from "next/link";
import menu from "../../public/menu.svg";
import Navbar from "./components/navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className="box-border w-screen h-screen flex justify-center items-center bg-zinc-950">
          <div className="w-11/12 h-[90%] box-border border border-solid rounded-xl p-4 items-center">
            <header className="w-full mh-[2rem] flex justify-center">
              <Navbar />
            </header>
            <hr className="my-[1rem]" />
            <div className="content w-full h-5/6 flex justify-center">{children}</div>
          </div>
        </body>
      </html>
    </>
  );
}