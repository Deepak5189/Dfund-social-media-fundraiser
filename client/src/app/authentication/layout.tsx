import AuthNavbar from "@/components/Navbar/AuthNavbar";

export default function AuthLayout({
  children,
}:Readonly<{children: React.ReactNode;
}>){
  return (
    <div className="h-screen flex flex-col bg-[#6663a6] text-white">
      <header className="bg-transparent backdrop-blur-md drop-shadow-lg">
        <AuthNavbar/>
      </header>
      <main className="flex text-black mx-auto sm:my-auto my-[18vh]">
        {children}
      </main>
    </div>
  )
}