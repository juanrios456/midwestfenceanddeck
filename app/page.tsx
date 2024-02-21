import Image from "next/image";
import { Header } from "./header";
import { Services } from "./services";
import { SlideShows } from "./slideshows";
import { Metadata } from 'next'
import { CreditedBusiness } from "./creditedBusiness";

export const metadata:Metadata = {
  title: 'Fence Contractor | Deck Builder Near Kansas - Midwest Fence and Deck',
  description: `Quality fence installations and Deck construction/installation at an affordable price. 
  Over 30 years of experience with wood fences, chain link fences, vinyl fences, aluminum fences, steel fences, stairs, steps, roofs, railings, renovations, repairs, and special ordered designs.`,
  openGraph: {
    title: 'Midwest Fence and Deck | Fence Contractor | Deck Builder',
    description: 'Located in Kansas, with over 30 years of experience building and designing decks/fences. Contact Us today for a free estimate.',
    images: ['https://midwestfenceanddeck.com/deck-1.jpg'],
    url: 'https://midwestfenceanddeck.com',
    type: 'website',
  }
} 

export default function Home() {
  return (
    <main className="">
      <Header/>
      <CreditedBusiness/>
      <Services/>
      <SlideShows/>
    </main>
  );
}
