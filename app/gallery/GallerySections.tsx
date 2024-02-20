'use client'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Image, Button, useDisclosure, Divider, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";

export function GallerySection({title, children}:{ title: string, children: React.ReactNode }){
  return(
    <div className="px-4 py-14">
      <h1 className="text-center">{title}</h1>
      <Divider/>
      <div className="py-4">
        {children}
      </div>
      
    </div>
  );
}

export function GallerySubsection({title, imageList, srcPath, id, }:{title:string, imageList:string[], srcPath:string, id: string}){
  return(
  <div>
    <h2 id={id}>{title}</h2>
    <p className="text-2xl text-center bg-black text-white">Click any image below to enlarge it.</p>
    <div className='px-4 py-4 flex flex-row flex-wrap gap-5 justify-center '>
      <BuildImages imageList={imageList} srcPath={srcPath}/>
    </div>
    
  </div>);
}

export function BeforeAndAfter({array}:{ array: Array<string>}){
  let imageList:any = []
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalState, setModalState] = useState('')

  const updateModalImage = (event:any)=>{
    setModalState(event.target.src)
    onOpen()
  }

  //this arranges the object array and transforms it into an array with 2 objects
  //the src and the alt for the before image and the src and alt for the after image
  //It is needed in order to loop over the before and after images for the decks section.
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    index++;
    imageList.push({beforeImage: element, afterImage: array[index]})
  }
  return(
    <>
    <h2 id="Decks">Before and After</h2>
    <p className="text-2xl text-center bg-black text-white">Click any image below to enlarge it.</p>

    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" placement="center" >
      <ModalContent className="bg-zinc-800">
        {(onClose) => (
          <>
            <ModalHeader></ModalHeader>
            <ModalBody>
              <Image
                src={`${modalState}`}
                alt="Wow"
                width="auto"
                height="auto"
                className="h-full max-h-[90vh] w-auto "
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
    <div className=" flex flex-row flex-wrap justify-center gap-4" id="#Decks">
    {
      imageList.map((item:any,index:number)=>(
      <Card className="" key={index}>
        <CardBody className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <div className="flex flex-col text-xl">
            <p className="text-center"><i>Before</i></p>
            <Image
              src={`/decks/before-and-after/${item.beforeImage.src}`}
              alt={item.beforeImage.alt}
              width={300}
              height={275}
              onClick={updateModalImage}
              className="w-full max-w-300px h-auto hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-center"><i>After</i></p>
            <Image
              src={`/decks/before-and-after/${item.afterImage.src}`}
              alt={item.afterImage.alt}
              width={300}
              height={275}
              onClick={updateModalImage}
              className="w-full max-w-300px h-auto  hover:cursor-pointer"
            />
          </div>
        </CardBody>
      </Card>
      ))
    }
    </div>
    </>
  );
}

export function BuildImages({imageList, srcPath}:{ imageList:string[], srcPath:string}){
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalState, setModalState] = useState('')

  const updateModalImage = (event:any)=>{
    setModalState(event.target.src)
    onOpen()
  }

  return(
    <>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" placement="center" >
      <ModalContent className="bg-zinc-800">
        {(onClose) => (
          <>
            <ModalHeader></ModalHeader>
            <ModalBody>
              <Image
                src={`${modalState}`}
                alt="Wow"
                width="auto"
                height="auto"
                className="w-full max-h-[80vh]  "
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
    {imageList.map((item:any, index:number)=>(
    <div className="flex justify-center items-center" key={index+item.src}>
      <Image
        src={`${srcPath}${item.src}`}
        onClick={updateModalImage}
        alt={item.src}
        width={370}
        height={400}
        className='w-full h-auto max-w-[300px] hover:cursor-pointer'
      />
    </div>
    ))}
    </>
  )
}

