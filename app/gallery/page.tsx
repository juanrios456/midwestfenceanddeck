import { CreditedBusiness } from "../creditedBusiness";
import { GallerySubsection, GallerySection, BeforeAndAfter, BuildImages, BuildCollageBlock } from "./GallerySections";
import { wow } from "./functions";

const privacyWoodFences:any = wow('./public/fences/wood/privacy');
const semiPrivacyWoodFences:any = wow('./public/fences/wood/semi-privacy');
const vinylFences:any = wow('./public/fences/vinyl/');
const steelAndAluminumFences:any = wow('./public/fences/steel-and-aluminum/');
const decksBeforeAndAfter:any = wow('./public/decks/before-and-after/');
const coveredOrScreenedDecksBeforeAndAfter:any = wow('./public/covered-or-screened-deck/before-and-after/');
const deckFloors:any = wow('./public/decks/deck-floors/')
const pergolas:any = wow('./public/pergolas/');
const protectiveRailing:any = wow('./public/protective-railing/')
const trellis:any = wow('./public/trellis/')
const deckCollages:any = wow('./public/covered-or-screened-deck/collages/4')
const coveredDeckCollages:any = wow('./public/decks/collages/4')

//split the decks section into "Decks" and "Screen/Covered Decks"   Task Completed
//deck floors section to be added   TasK Completed

//add "concrete and patios" section into a before and after       (Waitng on more Images from John)
//add stained fences section      (Waitng on more Images from John)
//add more steel fences         (Waitng on more Images from John)
//need to add collections to deck gallery
export default function Page(){
  return(
    <>
      <div className="p-2">
        <CreditedBusiness/>
        <GallerySection title="Fences">
          <GallerySubsection title="Privacy Wood Fences" id="WoodFences">
            <BuildImages  imageList={privacyWoodFences} srcPath="/fences/wood/privacy/"/>
          </GallerySubsection>
          <GallerySubsection title="Semi-Privacy Wood Fences" id="SemiPrivacyWoodFences">
            <BuildImages  imageList={semiPrivacyWoodFences} srcPath="/fences/wood/semi-privacy/"/>
          </GallerySubsection>
          <GallerySubsection title="Vinyl Fences" id="VinylFences">
            <BuildImages  imageList={vinylFences} srcPath="/fences/vinyl/"/>
          </GallerySubsection>
          <GallerySubsection title="Steel and Aluminum Fences" id="SteelAndAluminumFences">
            <BuildImages imageList={steelAndAluminumFences} srcPath="/fences/steel-and-aluminum/"/>
          </GallerySubsection>
        </GallerySection>
        <GallerySection title="Covered/Screened Decks">
          <GallerySubsection id="CoveredOrScreenedDecks" title="Before And After Examples">
            <BeforeAndAfter imageList={coveredOrScreenedDecksBeforeAndAfter} srcPath="/covered-or-screened-deck/before-and-after/"/>
          </GallerySubsection>
          <GallerySubsection title="Covered/Screened Deck Collages" id="CoveredDeckCollages">
            <BuildCollageBlock
              text="Screened Deck With a Roof and Stairs"
              src="/covered-or-screened-deck/collages/1/deck-with-stairs-screen-and-roof.jpg"
              alt="Screened deck with a roof and stairs"
              collageArray={wow('./public/covered-or-screened-deck/collages/1/')}
              srcPath="/covered-or-screened-deck/collages/1/"
            />
            <BuildCollageBlock
              text="Screened Deck With Stairs and a Roof"
              src="/covered-or-screened-deck/collages/2/deck-with-screen-and-stairs.jpg"
              alt="Screened deck with a roof and stairs"
              collageArray={wow('./public/covered-or-screened-deck/collages/2/')}
              srcPath="/covered-or-screened-deck/collages/2/"
            />
            <BuildCollageBlock
              text="Screened Deck With a Roof Stairs and extended porch"
              src="/covered-or-screened-deck/collages/3/deck-with-stairs-and-roof-and-porch.jpg"
              alt="Screened Deck With a Roof Stairs and extended porch"
              collageArray={wow('./public/covered-or-screened-deck/collages/3/')}
              srcPath="/covered-or-screened-deck/collages/3/"
            />
            <BuildCollageBlock
              text="Screened Deck With a Roof Stairs and extended porch"
              src="/covered-or-screened-deck/collages/4/deck-porch-gate-stairs-and-screen.jpg"
              alt="Screened Deck With a Roof Stairs and extended porch"
              collageArray={wow('./public/covered-or-screened-deck/collages/4/')}
              srcPath="/covered-or-screened-deck/collages/4/"
            />
          </GallerySubsection>
        </GallerySection>
        <GallerySection title="Decks">
          <GallerySubsection id="Decks" title="Before and After Examples" >
            <BeforeAndAfter imageList={decksBeforeAndAfter} srcPath="/decks/before-and-after/"/>
          </GallerySubsection>
          <GallerySubsection title="Deck Collage" id="DeckCollages">
            <BuildCollageBlock
              text="Deck With a Roof and Stairs"
              src="/decks/collages/1/deck-roof.jpg"
              alt="Deck with a roof and stairs"
              collageArray={wow('./public/decks/collages/1/')}
              srcPath="/decks/collages/1/"
            />
            <BuildCollageBlock
              text="Deck With a Pergola and Stairs"
              src="/decks/collages/2/deck-with-stairs-and-pergola.jpg"
              alt="Deck with a Pergola and stairs"
              collageArray={wow('./public/decks/collages/2/')}
              srcPath="/decks/collages/2/"
            />
            <BuildCollageBlock
              text="Deck With Stairs and a Roof"
              src="/decks/collages/3/deck-with-stairs-and-roof.jpg"
              alt="Deck with Stairs and a Roof"
              collageArray={wow('./public/decks/collages/3/')}
              srcPath="/decks/collages/3/"
            />
            <BuildCollageBlock
              text="Deck With Stairs"
              src="/decks/collages/4/long-deck-with-stairs.jpg"
              alt="Deck with stairs"
              collageArray={wow('./public/decks/collages/4/')}
              srcPath="/decks/collages/4/"
            />
          </GallerySubsection>
          <GallerySubsection title="Deck Floors" id="DeckFloors">
            <BuildImages imageList={deckFloors} srcPath="/decks/deck-floors/" />
          </GallerySubsection>

        </GallerySection>
        <GallerySection title="Pergolas">
          <GallerySubsection title="Pergolas" id="Pergolas">
            <BuildImages imageList={pergolas} srcPath="/pergolas/"/>
          </GallerySubsection>
        </GallerySection>
        <GallerySection title="Trellis">
          <GallerySubsection title="Steel and Wood Trellis" id="Trellis">
            <BuildImages imageList={trellis} srcPath="/trellis/"/>
          </GallerySubsection>
        </GallerySection>
        <GallerySection title="Protective Railings">
          <GallerySubsection title="Steel and Wood Railings" id="ProtectiveRailings">
            <BuildImages srcPath="/protective-railing/" imageList={protectiveRailing} />
          </GallerySubsection>
        </GallerySection>
      </div>
    </>
  );
}