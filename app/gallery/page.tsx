import { GallerySubsection, GallerySection, BeforeAndAfter } from "./GallerySections";
import { wow } from "./functions";

const woodFences:any = wow('./public/fences/wood/');
const vinylFences:any = wow('./public/fences/vinyl/');
const steelAndAluminumFences:any = wow('./public/fences/steel-and-aluminum');
const decksBeforeAndAfter:any = wow('./public/decks/before-and-after/').reverse();
console.log(steelAndAluminumFences);
console.log(decksBeforeAndAfter);

export default function Page(){
  return(
    <>
      <div className="p-2">
        <GallerySection title="Fences">
          <GallerySubsection title="Wood Fences" imageList={woodFences} srcPath="/fences/wood/" id="WoodFences"/>
          <GallerySubsection title="Vinyl Fences" imageList={vinylFences} srcPath="/fences/vinyl/" id="VinylFences"/>
          <GallerySubsection title="Steel and Aluminum Fences" imageList={steelAndAluminumFences} srcPath="/fences/steel-and-aluminum/" id="SteelAndAluminumFences"/>
        </GallerySection>
        <GallerySection title="Decks">
          <BeforeAndAfter array={decksBeforeAndAfter}/>
        </GallerySection>
      </div>
    </>
  );
}