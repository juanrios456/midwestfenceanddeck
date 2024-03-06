'use client'

import { register } from "swiper/element";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Link, Image, Button, useDisclosure } from "@nextui-org/react";
import { useState } from "react";

register();

export function SlideShows(){
  return(
    <>
      <SlideshowSection
        title="Wood Fences"
        imageList={woodImageList}
        galleryLink="/#WoodFences"
        containerClassName="bg-[#474343] text-white"
      />
      <SlideshowSection
        title='Decks, Screen Decks, and Patios'
        imageList={deckImageList}
        galleryLink="/#Decks"
        containerClassName="bg-[#F76565] "
        rtl
      />
      <SlideshowSection
        title="Vinyl and Composite Fences"
        imageList={vinylImageList}
        galleryLink="/#VinylFences"
        containerClassName="bg-[#ECECEC] "
      />
      <SlideshowSection
        title='Pergolas'
        imageList={pergolaImageList}
        galleryLink="/#Pergolas"
        containerClassName="bg-[#7E7D7D] text-white"
        rtl
      />
      <SlideshowSection
        title='Steel and Aluminum Fences'
        imageList={steelImageList}
        galleryLink="/#SteelAndAluminumFences"
        containerClassName="bg-[#ECECEC] "
      />
    </>
  )
}

const vinylImageList = [
      {
        src: '/vinyl-fence-1.jpg',
        alt: 'tall vinyl privacy fence and vinyl gate with lattice'
      },
      {
        src: '/vinyl-fence-2.jpg',
        alt: 'tall lattice top white privacy vinyl fence with gate'
      },
      {
        src: '/vinyl-fence-3.jpg',
        alt: 'dark brown vinyl fence with a picture frame style'
      },
      {
        src: '/vinyl-fence-4.jpg',
        alt: 'semi privacy 4 foot white vinyl fence'
      }
    ]
const woodImageList = [
      {
        src: '/wood-fence-1.jpg',
        alt: 'wood-fence-4foot-semi-privacy'
      },
      {
        src: '/wood-fence-2.jpg',
        alt: 'regular 6 foot wood privacy fence'
      },
      {
        src: '/wood-fence-3.jpg',
        alt: 'wood picture frame fence with gate'
      },
      {
        src: '/wood-fence-4.jpg',
        alt: 'semi privacy horizontal wood fence'
      }
    ]
const pergolaImageList = [
      {
        src: '/pergola-1.jpg',
        alt: 'brown pergola over a patio and fireplace'
      },
      {
        src: '/pergola-2.jpg',
        alt: 'tan pergola over a fireplace'
      },
      {
        src: '/pergola-3.jpg',
        alt: 'brown deck with pergola stairs and chairs on the deck'
      },
      {
        src: '/pergola-4.jpg',
        alt: 'red pergola over a backyard patio'
      }
    ]
const deckImageList = [
      {
        src: '/deck-1.jpg',
        alt: 'brown deck with stairs special curved railing and a pergola'
      },
      {
        src: '/deck-2.jpg',
        alt: 'gray deck with stairs gravel and pergola'
      },
      {
        src: '/deck-3.jpg',
        alt: 'brown deck with stairs and no roof over a concrete slab'
      },
      {
        src: '/deck-4.jpg',
        alt: 'light brown deck with steps stairs and a roof'
      }
    ]
const steelImageList = [
      {
        src: '/steel-fence-1.jpg',
        alt: 'straight steel semi privacy fence'
      },
      {
        src: '/steel-fence-2.jpg',
        alt: 'steel fence straight with spike design'
      },
      {
        src: '/steel-fence-3.jpg',
        alt: 'steel fence  with multiple corners over retaining wall'
      },
      {
        src: '/steel-fence-4.jpg',
        alt: 'steel railing on top of a high retaining wall'
      }
    ]


function SlideshowSection(props){

  const { title, imageList, galleryLink, rtl, containerClassName } = props;
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalState, setModalState] = useState('')

  const updateModalImage = (event)=>{
    setModalState(event.target.src)
    onOpen()
  }

  return(
    <div className={`py-10 px-3  ${containerClassName}`}>
      <div className="flex flex-col justify-center">
        <h2 className="text-center">{title}</h2>
        <i className="text-center text-2xl">Click any of the images below to enlarge them.</i>
      </div>
      <div className={`py-10 px-3 flex justify-center items-center`}>
        <swiper-container
          navigation="true"
          autoplay="true"
          slides-per-view="auto"
          pagination="true"
          autoplay-delay="6000"
          centered-slides="true"
          loop="true"
          grab-cursor="true"
          dir={rtl ? 'rtl' : ''}
          style={{ width:'100%', maxWidth:'1100px', height:"auto", display: 'grid', placeItems: 'center' }}
          autoplay-disable-on-interaction="true"
        >
          {imageList.map((value, index)=>(
            <swiper-slide
              key={index}
              style={{ width: '100%', maxWidth: '450px', height: '100%', display: 'grid', placeItems: 'center', }}
            >
              <Image
                src={value.src}
                alt={value.alt}
                width="auto"
                height="auto"
                className="h-auto w-full object-cover hover:cursor-pointer px-4 "
                onClick={updateModalImage}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" placement="center" >
        <ModalContent className="bg-zinc-800">
          {(onClose) => (
            <>
              <ModalHeader></ModalHeader>
              <ModalBody className="flex justify-center items-center">
                <Image
                  src={modalState}
                  alt="popup-image"
                  width="auto"
                  height="auto"
                  className="h-full max-h-[80vh] w-auto "
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex justify-center">
        <Button href={`/gallery${galleryLink ?? ''}`} as={Link} variant="shadow">View Full Image Gallery</Button>
      </div>
    </div>
  )
}