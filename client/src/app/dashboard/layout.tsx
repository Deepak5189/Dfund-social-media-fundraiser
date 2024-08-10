import MainNavbar from "@/components/Navbar/MainNavbar";

export default function DashboardLayout({
  children,
}:Readonly<{children: React.ReactNode;
}>){
  return(
    <div className="h-screen flex flex-col w-screen">
      <header className="bg-transparent backdrop-blur-md drop-shadow-lg">
        <MainNavbar/>
      </header>
      <main className="text-black">
        {children}
      </main>
    </div>
  )
}