'use client'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Image, Button, useDisclosure, Divider, Card, CardBody, Accordion, AccordionItem } from "@nextui-org/react";
import { useRef, useState } from "react";

export function GallerySection({title, children}:{ title: string, children: React.ReactNode }){
  return(
    <div className="px-4 py-4">
      <h1 className="text-center">{title}</h1>
      <Divider/>
      <div className="py-4">
        {children}
      </div>
      
    </div>
  );
}

export function GallerySubsection({title, id, children }:{title:string, id: string, children: React.ReactNode}){
  return(
  <div>
    <h2 id={id}>{title}</h2>
    <p className="text-2xl text-center bg-black text-white">Click any image below to enlarge it.</p>
    <div className='flex flex-row flex-wrap justify-center gap-4 p-4 '>
      {children}
    </div>
    
  </div>);
}

export function BeforeAndAfter({imageList, srcPath}:{ imageList: Array<string>, srcPath: string}){
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalState, setModalState] = useState('');

  const updateModalImage = (event:any)=>{
    setModalState(event.target.src);
    onOpen();
  }

  return(
    <>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" placement="center" >
      <ModalContent className="bg-zinc-800">
        {(onClose) => (
          <>
            <ModalHeader></ModalHeader>
            <ModalBody className="flex justify-center items-center">
              <Image
                src={`${modalState}`}
                alt="PopUp Image"
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
    {
      imageList.map((item:any,index:number)=>(
      <Card className="" key={index}>
        <CardBody className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <div className="flex flex-col text-xl">
            <p className="text-center"><i>Before</i></p>
            <Image
              src={`${srcPath}${item.before.src}`}
              alt={item.before.alt}
              width={300}
              height={275}
              onClick={updateModalImage}
              className="w-full max-w-300px h-auto hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-center"><i>After</i></p>
            <Image
              src={`${srcPath}${item.after.src}`}
              alt={item.after.alt}
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
    </>
  );
}

export function BuildImages({imageList, srcPath}:{ imageList:Array<{src:string, alt:string}>, srcPath:string}){
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalState, setModalState] = useState('');

  const updateModalImage = (event:any)=>{
    setModalState(event.target.src);
    onOpen();
  }

  return(
    <>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" placement="center" >
      <ModalContent className="bg-zinc-800">
        {(onClose) => (
          <>
            <ModalHeader></ModalHeader>
            <ModalBody className="flex justify-center items-center">
              <Image
                src={`${modalState}`}
                alt="PopUp Image"
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
    {imageList.map((item:any, index:number)=>(
    <div className="flex justify-center items-center" key={index+item.src}>
      <Image
        src={`${srcPath}${item.src}`}
        onClick={updateModalImage}
        alt={item.alt}
        width={370}
        height={400}
        className='w-full h-auto max-w-[300px] hover:cursor-pointer'
      />
    </div>
    ))}
    </>
  )
}

export function BuildCollageBlock(
  {
    text,
    src,
    alt,
    srcPath,
    collageArray,
  }
  :
  {
    text:string,
    src: string,
    alt: string,
    srcPath: string,
    collageArray: Array<{src:string, alt:string}>,
  }){

  return(
    <>
    <Accordion className="" variant="shadow">
      <AccordionItem key="1" aria-label="Accordion 1" title={<CollageBlock text={text} src={src} alt={alt}/>}  className="">
      <div className='flex flex-row flex-wrap justify-center gap-4 p-4 '>
        <BuildImages imageList={collageArray} srcPath={srcPath}/>
      </div>        
      </AccordionItem>
    </Accordion>
    
    </>
  )
}

function CollageBlock({text, src, alt}:
  {
    text: string,
    src: string,
    alt: string,
  }){
  return(
    <div className="flex flex-col justify-center items-center w-full bg-zinc-300 p-4 space-y-4" >
      <h4 className="text-2xl text-center">{text}</h4>
      <p className="text-xl">Click This Gray Block to view the full image collage</p>
      <Image
        src={src}          
        alt={alt}
        width={370}
        height={400}
        className='w-full max-w-[250px] h-auto hover:cursor-pointer'
      />
    </div>
  )
}

