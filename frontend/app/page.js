import Image from "next/image";
import Minting from "./components/ Minting";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="background-image w-screen h-screen">
      <Navbar />
      <Minting />
    </div>
  );
}
