"use client"
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar/landingNavbar";
import ContextWrapper from "@/utils/context/ContextWrapper";
import Image from "next/image";
import { FaGoogle, FaYoutube } from "react-icons/fa6";

export default function Home() {
  return (
    <ContextWrapper>
      <HomePage/>
    </ContextWrapper>
  );
}
