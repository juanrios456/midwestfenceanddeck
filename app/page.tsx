import Image from "next/image";
import { Header } from "./header";
import { Services } from "./services";
import { SlideShows } from "./slideshows";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Services/>
      <SlideShows/>
    </main>
  );
}
