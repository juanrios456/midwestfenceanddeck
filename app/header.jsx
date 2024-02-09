'use client'
import { register } from 'swiper/element/bundle';
import { Button, Link, } from "@nextui-org/react";
import Image from "next/image";

register()

const imageList = [
  {
    src:'/roof.jpg',
    alt: 'D'
  },
  {
    src: '/fence-in-sunlight.jpg',
    alt: 'd',
  },
  {
    src: '/wood-privacy-fence.jpg',
    alt: 'd',
  },
  {
    src: '/deck-and-stairs.jpg',
    alt: 'd',
  },
  {
    src: '/deck-floor-1.jpg',
    alt: 'd',
  },
  {
    src: '/vinyl-fence-1.jpg',
    alt: 'd'
  },
  {
    src: '/pergola-4.jpg',
    alt: 'd'
  },
];

export function Header(){

  return(
    <>
    <div className=" h-[100vh] w-full relative">
      <swiper-container
        slides-per-view="1"
        navigation='false'
        loop
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
        style={{height: '100%', width: '100%', position: 'absolute', opacity: '1' }}
        effect={"fade"}
        speed="3000"
        allow-touch-move="false"
      >
        {imageList.map((item, index)=>(
        <swiper-slide key={index}>
          <Image
            src={item.src}
            alt={item.alt}
            width={500}
            height={450}
            className="w-full h-full object-cover object-center  "
          />
        </swiper-slide>

        ))}
      </swiper-container>
      <div className="absolute h-full w-full flex justify-center items-center z-10 p-4">
        <div className={`p-5 rounded-3xl space-y-4 text-[#f5f5f5] w-full max-w-[750px] bg-black/40 `}>
          <h1 className="text-center leading-none">Midwest Fence and Deck</h1>
          <p className=" text-[20px] sm:text-[18px] " ><i>Fence Builders / Deck Buidlers: <span className=" underline decoration-green-600">Lawrence, KS | Olathe, KS | Topeka, KS | Kansas City | Cedar Hills | Midwest Area</span> Since 1990</i></p>
          <p>For A Free Estimate Contact Us by Tapping Any Of The Buttons Below</p>
          <div className="flex sm:flex-row flex-col font-[18px] w-full justify-center items-center space-y-[10px] sm:space-y-0 sm:space-x-[20px]">
            <Button as={Link} color='white' className='hover:bg-white hover:text-black text-white' href="tel:+17857270645" variant="ghost">
              Call Us Today 
            </Button>  
            <Button as={Link} className="bg-white" href="mailto:john@midwestfenceanddeck.com" variant="shadow">
              Send Us an Email
            </Button>  
          </div>
        </div>
      </div>
    </div>
    </>
  )
}