import Image from "next/image";
import Minting from "./components/ Minting";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Minting />
    </div>
  );
}
