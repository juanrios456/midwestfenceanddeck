import { CreditedBusiness } from "../creditedBusiness";
import { GallerySubsection, GallerySection, BeforeAndAfter } from "./GallerySections";
import { wow } from "./functions";

const woodFences:any = wow('./public/fences/wood/');
const vinylFences:any = wow('./public/fences/vinyl/');
const steelAndAluminumFences:any = wow('./public/fences/steel-and-aluminum/');
const decksBeforeAndAfter:any = wow('./public/decks/before-and-after/').reverse();
const pergolas:any = wow('./public/pergolas/');
const protectiveRailing:any = wow('./public/protective-railing/')
const stairsBeforeandAfter:any = wow('./public/stairs/before-and-after/').reverse();

export default function Page(){
  return(
    <>
      <div className="p-2">
        <CreditedBusiness/>
        <GallerySection title="Fences">
          <GallerySubsection title="Wood Fences" imageList={woodFences} srcPath="/fences/wood/" id="WoodFences"/>
          <GallerySubsection title="Vinyl Fences" imageList={vinylFences} srcPath="/fences/vinyl/" id="VinylFences"/>
          <GallerySubsection title="Steel and Aluminum Fences" imageList={steelAndAluminumFences} srcPath="/fences/steel-and-aluminum/" id="SteelAndAluminumFences"/>
        </GallerySection>
        <GallerySection title="Decks">
          <BeforeAndAfter imageList={decksBeforeAndAfter} id="Decks" title="Deck Examples" srcPath="/decks/before-and-after/"/>
        </GallerySection>
        <GallerySection title="Pergolas">
          <GallerySubsection title="Pergolas" imageList={pergolas} srcPath="/pergolas/" id="Pergolas"/>
        </GallerySection>
        <GallerySection title="Stairs">
          <BeforeAndAfter title="Before and After" imageList={stairsBeforeandAfter} id="Stairs" srcPath="/stairs/before-and-after/"/>
        </GallerySection>
        <GallerySection title="Protective Railings">
          <GallerySubsection title="Steel Railing" imageList={protectiveRailing} id="ProtectiveRailings" srcPath="/protective-railing/"/>
        </GallerySection>
      </div>
    </>
  );
}