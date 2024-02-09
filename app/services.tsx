'use client'
import { RevealOnScroll } from "@/components/ScrollTransition";
import { Button, Link } from "@nextui-org/react";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";

const services = [
  {
    service: 'Fence Installation',
    description: `Enhance your property's security and curb appeal with our expert fence building services.
      Our skilled team combines craftsmanship and quality materials to create durable and stylish fences tailored to meet your specific needs.
      From classic wooden designs to modern metal installations, we deliver top-notch solutions that ensure privacy and add value to your home or business.
      Trust us to build fences that not only stand the test of time but also elevate the aesthetic of your outdoor space.
      Contact us for a seamless and professional fencing experience.`,
    picture:'/fence-in-sunlight.jpg',
    serviceButton:{
      text: "Call Now",
      href: "tel:+17857270645"
    }
  },
  {
    service: 'Deck Installation',
    description: `Elevate your outdoor living experience with our premier deck building services.
      Our expert team specializes in crafting custom decks that seamlessly blend functionality with aesthetic appeal.
      Whether you envision a spacious wooden deck for entertaining or a cozy composite deck for low-maintenance luxury, we bring your dreams to life.
      Trust us to deliver quality craftsmanship, using top-tier materials to ensure your deck not only enhances your lifestyle but also stands strong against the elements.
      Transform your outdoor space into a haven of relaxation and entertainment with our professional deck building solutions.`,
    picture:'/deck-floor.jpg',
    serviceButton:{
      text: "Call Now",
      href: "tel:+17857270645"
    }
  },
  {
    service: 'Pergolas',
    description: `Transform your outdoor space into a captivating retreat with our expert pergola building services.
      Our skilled craftsmen design and construct bespoke pergolas that seamlessly blend style and functionality.
      Whether you desire a charming garden pergola for intimate gatherings or a spacious patio cover for shade and comfort, our team ensures precision and quality in every detail.
      Elevate your outdoor experience with our top-notch pergola solutions, tailored to enhance your property's aesthetic appeal and create a perfect sanctuary for relaxation and entertainment.`,
    picture: '/pergola-3.jpg',
    serviceButton:{
      text: "Call Now",
      href: "tel:+17857270645"
    }
  },
  {
    service: 'Fence Repair and Restoration',
    description: `Our fence repair and restoration service offers expert diagnosis and comprehensive solutions for damaged fences caused by wear, weather, or pests.
    With skilled technicians proficient in utilizing a diverse range of materials and techniques, we efficiently mend broken sections and reinforce weak points to restore both functionality and aesthetics.
    Trust us for meticulous attention to detail and a commitment to enhancing the longevity and appeal of your fencing structure.`,
    picture: '/deck-redesign-repair.jpg',
    serviceButton:{
      text: "Call Us Now",
      href: "tel:+17857270645"
    }
  },

  {
    service: 'Deck Repair and Restoration',
    description: `Our deck repair and restoration service offers comprehensive solutions to revitalize your outdoor living space.
    From repairing damaged boards to sanding and refinishing surfaces, we specialize in enhancing the beauty and longevity of your deck.
    Trust our experienced team to provide expert craftsmanship and attention to detail, ensuring your deck not only looks stunning but also stands the test of time.`,
    picture: '/no-roof-with-stairs.jpg',
    serviceButton:{
      text: "Call Us Today",
      href: "tel:+17857270645"
    }
  }
]

export function Services({isVisible}:any){
  return(
    <>
      <div className="py-20 ">
        <h2 className="px-2 text-center ">Services</h2>
        <div className="flex justify-center flex-wrap p-4 ">
          {services.map((item, index) =>(
          <RevealOnScroll variant="slide-down" key={index} >
            <div className="m-4 p-2" >
              <div className="relative w-full justify-center flex">
                <Image src={item.picture ?? '/logo.jpg'} alt="Background Image" className="h-36 w-36 object-cover rounded-[75%] border-black shadow-lg"  width={300} height={300}/>
              </div>
              <div className="px-4 py-8 w-full max-w-[425px]  bg-zinc-100/60 rounded-2xl " >
                <h3 className="text-center ">{item.service}</h3>
                <div className=" border"></div>
                <p className="p-2">{item.description}</p>
                <div className="flex justify-center flex-wrap">
                  <Button href={item.serviceButton.href} as={Link} className="m-3" variant="ghost">{item.serviceButton?.text}</Button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          ))}
        </div>
      </div>
    </>
  )
}