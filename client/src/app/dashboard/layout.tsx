import MainNavbar from "@/components/Navbar/MainNavbar";

export default function DashboardLayout({
  children,
}:Readonly<{children: React.ReactNode;
}>){
  return(
    <div className="bg-white flex flex-col w-screen">
      <header className="bg-transparant sticky top-0 z-10 w-full backdrop-blur-md drop-shadow-lg">
        <MainNavbar/>
      </header>
      <main className="text-black">
        {children}
      </main>
    </div>
  )
}