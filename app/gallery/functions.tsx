import fs from 'fs'

export function wow(directory:string){
  let infoArray:any = [];
  let newInfo:any = [];
  let altArray:any[] = [];
  const fileList = fs.readdirSync(directory);

  switch (directory) {
    case './public/fences/wood/privacy':
      infoArray = [
        {
          src:"dog-ear-top-privacy-wood-fence-1.jpg",
          alt: "dog Ear Top 6 foot privacy fence with a gate at an inside view"
        },
        {
          src: 'dog-ear-top-privacy-wood-fence-4.jpg',
          alt: '6 Foot privacy wood fence'
        },
        {
          src: 'picture-frame-fence-and-gate.jpg',
          alt: 'wooden gate with a picture frame style and a fence on both sides with one turning a corner'
        },
        {
          src: 'wood-privacy-fence.jpg',
          alt: 'regular dog ear top wood privacy fence'
        },
        {
          src: 'shadowbox-wood-fence.jpg',
          alt: 'shadowbox wood fence from the inside',
        },
        {
          src: 'privacy-arched-wood-fence.jpg',
          alt: 'arch top wood privacy fence corner with decorative posts'
        },
        {
          src: 'horizontal-semi-privacy-wood-fence.jpg',
          alt: 'horizontal wood fence, semi privacy'
        },
        {
          src: 'regular-wood-privacy-fence.jpg',
          alt: 'tall wood privacy fence'
        }
      ]
      break;
    case './public/fences/wood/semi-privacy':
      infoArray = [
        {
          src: 'dog-ear-top-semi-privacy-wood-fence.jpg',
          alt: '4 foot dog ear top wood fence',
        },
        {
          src: 'short-semi-privacy-dog-ear-fence.jpg',
          alt: 'short-semi-privacy-wood-fence',
        },
        {
          src: 'short-dog-ear-wood-fence.jpg',
          alt: '4 foot dog ear top semi privacy fence with a gate',
        },
        {
          src: 'short-wood-picket-fence.jpg',
          alt: 'wood picket fence going up hill while remaining straight'
        },
        {
          src: 'short-horizontal-wood-fence.jpg',
          alt: 'wood horizontal fence that is protecting a yard and is 4 foot tall',
        },
        {
          src: 'horizontal-tall-semi-privacy-fence.jpg',
          alt: 'horizontal 8 foot semi privacy wood fence with black posts',
        },
        {
          src: 'horizontal-semi-privacy-stained-wood-fence.jpg',
          alt: 'stained wood fence with a horizontal fence style that is 4 foot tall'
        },
        {
          src: 'semi-privacy-horizntal-wood-stained-fence.jpg',
          alt: 'semi privacy stained wood fence from an outside corner view looking at how straight it is'
        },
      ]
      break;
    case './public/fences/vinyl/':
      infoArray = [
        { 
          src: 'brown-vinyl-fence.jpg', 
          alt: 'tall privacy brown vinyl fence with a pool in front of it' 
        },
        { 
          src: 'vinyl-fence-and-gate.jpg', 
          alt: 'white vinyl fence with a gate'
        },       
        {
          src: 'vinyl-privacy-fence-corner.jpg',
          alt: 'tall white vinyl fence with one bush in front along a road'
        },
        { 
          src: 'vinyl-privacy-fence.jpg', 
          alt: '6 foot white vinyl fence over grass next to a sidewalk'
        },
        {
          src: 'vinyl-semi-privacy-fence.jpg',
          alt: '4 foot semi privacy white vinyl fence over grass',

        },
        {
          src: 'vinyl-semi-privacy-picket-fence.jpg',
          alt: 'small white vinyl fence with an arch covering a corner and a tree',
        },
        {
          src: 'vinyl-white-semi-privacy-picket-fence.jpg',
          alt: '4 foot semi privacy white vinyl fence with a gate',
        },
        {
          src: 'white-vinyl-semi-privacy-picket-fence.jpg',
          alt: '4 foot gate made of vinyl',
        }
      ];
      break;
    case './public/fences/steel-and-aluminum/':
      infoArray = [
        {
          src: 'straight-steel-fence.jpg',
          alt: 'upclose steel fence showing how straight it is',
        },
        {
          src: 'steel-fence-2.jpg',
          alt: 'steel fence with pointed top showing how straight it is for 30 feet',
        },
        {
          src: 'aluminum-fence-railing.jpg',
          alt: 'aluminum fence over stone retaining wall'
        },
        {
          src: 'tall-steel-fence.jpg',
          alt: 'tall steel fence over a retaining wall'
        },
        {
          src: 'aluminum-fence.jpg',
          alt: 'tall aluminum fence with a pool behind it',
        },
        {
          src: 'steel-fence.jpg',
          alt: 'steel fence in the autumn with dead grass and trees around'
        },
        {
          src: 'semi-privacy-steel-fence.jpg',
          alt: 'steel fence showing how straight it is for at least 40 feet along a backyard'
        },
        {
          src: 'steel-fence-backyard.jpg',
          alt: 'black steel fence protecting the backyard of a house'
        }
      ];
      break;
    case './public/decks/before-and-after/':
      infoArray = [
        {
          before:{
            src: 'porch-deck-with-stairs-and-steps-before.jpg',
            alt: 'white and blue porch deck with paint fading on the floor stairs and railing'
          },
          after:{
            src: 'porch-deck-with-stairs-and-steps-after.jpg',
            alt: 'white and gray porch deck with stairs and nice railing'
          },
        },
        {
          before:{
            src: 'porch-deck-with-roof-stairs-before.jpg',
            alt: 'porch deck with a natural roof and stairs that have brown paint fading as well as the brown railing'
          },
          after:{
            src: 'porch-deck-with-roof-stairs-after.jpg',
            alt: 'porch deck with a natural looking roof and small stairs with a nice garden in front'
          },
        },
        {
          before:{
            src: 'pool-deck-restoration-before.jpg',
            alt: 'pool deck with old wood flooring and white railing with fading paint'
          },
          after:{
            src: 'pool-deck-restoration-after.jpg',
            alt: 'deck with new gray wood flooring and white railing'
          },
        },
        {
          before:{ 
            src: 'pool-deck-before.jpg',
            alt: 'deck with old wood flooring'
          }, 
          after:{
            src: 'pool-deck-after.jpg',
            alt: 'gray deck floor with new flooring and white railing'
          },
        },
        {
          before:{
            src: 'deck-with-stairs-before.jpg',
            alt: 'white deck with fading paint and metal railing'
          },
          after:{
            src: 'deck-with-stairs-after.jpg',
            alt: 'deck with stairs and railing with a gray that matches the house'    
          },
        },
        {
          before:{
            src: 'deck-with-pergola-and-stairs-before.jpg',
            alt: 'deck with stairs that have white paint fading'
          },
          after:{
            src: 'deck-with-pergola-and-stairs-after.jpg',
            alt: 'Brown deck balcony with a pergola and stairs over a new concrete slab'
          },
        },
        {
          before:{
            src: 'deck-with-no-roof-before.jpg',
            alt: 'grass and a hill outside a door'
          },
          after:{
            src: 'deck-with-no-roof-after.jpg',
            alt: 'deck with a black fence around it outside the backdoor'
          }
        },
      ];
      break;
    case './public/covered-or-screened-deck/before-and-after/':
      infoArray = [
        {
          before:{
            src: 'porch-deck-with-roof-before.jpg',
            alt: 'deck with an inside porch and stairs that lead to a upstairs deck that is torn down'
          },
          after:{
            src: 'porch-deck-with-roof-after.jpg',
            alt: 'white porch deck with a roof that extends around the corner of the house'
          },
        },
        {
          before:{
            src: 'deck-with-screen-stairs-and-porch-before.jpg',
            alt: 'brown deck with no screen and missing trellis'
          },
          after:{
            src: 'deck-with-screen-stairs-and-porch-after.jpg',
            alt: 'brown deck with a roof surrounded by a screen and an outdoor patio with stairs leading down'
          },
        },
        {
          before: {
            src: 'deck-with-roof-stairs-and-porch-before.jpg',
            alt: 'white house with a small red deck and no stairs'
          },
          after:{
            src: 'deck-with-roof-stairs-and-porch-after.jpg',
            alt: 'brown deck balcony with a roof and stairs that have lighting'       
          },
        },
        {
          before:{
            src: 'deck-with-roof-screen-and-stairs-before.jpg',
            alt: 'freshly poured concrete behind a house with no deck'
          },
          after:{
            src: 'deck-with-roof-screen-and-stairs-after.jpg',
            alt: 'deck balcony with a roof, screen and stairs over a new slab of concrete'
          },
        },
        {
          before:{
            src: 'deck-with-roof-and-stairs-before.jpg',
            alt: 'red deck with fading paint and no roof'
          },
          after:{
            src: 'deck-with-roof-and-stairs-after.jpg',
            alt: 'gray deck with a roof and stairs that leads to a small patio space' 
          },
        },
      ];
      break;
    case './public/decks/deck-floors/':
      infoArray = [
        {
          src: 'brown-deck-floor.jpg',
          alt: 'light brown deck floor with brown railing and steps'
        },
        {
          src: 'dark-brown-deck-floor.jpg',
          alt: 'brown composite deck flooring with stairs that lead down with brown and black railing'
        },
        {
          src: 'dark-deck-floor.jpg',
          alt: 'dark brown deck floor with black railing'
        },
        {
          src: 'gray-and-white-deck-floor.jpg',
          alt: 'white and gray deck flooring with a glass table in the corner and brown railing with black'
        },
        {
          src: 'light-blue-deck-floor.jpg',
          alt: 'blue deck flooring with black steel railing'
        },
        {
          src: 'light-brown-deck.jpg',
          alt: 'light brown deck flooring with black railing that has brown posts and table with chairs on the far side'
        },
        {
          src: 'light-gray-deck-flooring.jpg',
          alt: 'light gray deck floor with black steel railing around it'
        },
      ];
      break;
    case './public/protective-railing/':
      infoArray = [
        {
          src: 'black-railing-by-stairs.jpg',
          alt: 'steel black railing over stone stairs and stone walkway'
        },
        {
          src: 'black-railing-on-ledge.jpg',
          alt: 'black steel railing on the ledge of a building'
        },
        {
          src: 'black-railing-on-patio.jpg',
          alt: 'patio with floor made of stone and black steel railing on the edge' 
        },
        {
          src: 'black-railing-on-stairs.jpg',
          alt: 'concrete porch with stairs and black railing'
        },
        {
          src: 'black-railing-over-retaining-wall.jpg',
          alt: 'steel black railing covering a retaining wall ledge'
        },
        {
          src: 'black-railing-over-stone-ledge.jpg',
          alt: 'stone retaining wall with steel railing on top'
        },
        {
          src: 'railing-covering-dip.jpg',
          alt: 'railing surrounding a hole where there is a window to a basement'   
        },
        {
          src: 'wood-railing.jpg',
          alt: 'gray deck with black railing around the edge'
        }
      ];
      break;
    case './public/pergolas/':
      infoArray = [
        {
          src: 'light-brown-pergola.jpg',
          alt: 'light brown pergola over a fireplace and concrete patio'
        },
        {
          src: 'dark-brown-pergola.jpg',
          alt: 'dark brown pergola over a covered fireplace'
        },
        {
          src: 'red-wood-pergola.jpg',
          alt: 'two red wood pergolas with intertwining tops over a concrete slab in a backyard'
        },
        {
          src: 'tan-pergola.jpg',
          alt: 'tan pergola over a backyard porch deck'
        },
        {
          src: 'gray-pergola.jpg',
          alt: 'gray pergola over a gray deck with stairs outside a backyard'
        },
        {
          src: 'white-pergola.jpg',
          alt: 'white pergola over a slab of concrete outside a sliding glass door'
        },
      ];
      break;
    case'./public/trellis/':
      infoArray = [
        {
          src: 'steel-trellis.jpg',
          alt: 'steel trellis in front of a steel fence'
        },
        {
          src: 'wooden-trellis.jpg',
          alt: 'wooden trellis in front of a wooden fence'
        }
      ]
      break;
    case './public/covered-or-screened-deck/collages/1/':
      infoArray = [
        {
          src: 'deck-interior-with-couches.jpg',
          alt: 'deck with a screen and gray floor and couches spread out'
        },
        {
          src: 'deck-with-stairs.jpg',
          alt: 'screened deck with stairs and a roof over it'
        },
        {
          src: 'deck-stairs-and-trellis.jpg',
          alt: 'gray deck with stairs and trellis'
        },
        {
          src: 'deck-with-roof-and-stairs.jpg',
          alt: 'deck under construction installing ceiling'
        },
        {
          src: 'deck-with-roof-screen-and-stairs.jpg',
          alt: 'screened deck with stairs and a roof'
        },
        {
          src: 'deck-stairs-with-screen.jpg',
          alt: 'deck stairs with screened deck in the background with a roof too'
        },
        {
          src: 'deck-with-stairs-screen-and-roof.jpg',
          alt: 'old deck with stairs and a trellis under the porch'
        },
        
      ];
      break;
    case './public/covered-or-screened-deck/collages/2/':
      infoArray = [
        { 
          src: 'deck-with-stairs.jpg',
          alt: 'deck with stairs'
        },
        {
          src: 'deck-with-screen-and-stairs.jpg',
          alt: 'deck with stairs, screened deck and a roof along with an outer upper porch'      
        },
        
        {
          src: 'deck-ceiling-fan-and-couches.jpg',
          alt: 'deck with a ceiling fan and couches spread out everywhere'
        },
        {
          src: 'deck-screen-and-stairs.jpg',
          alt: 'screened deck with stairs and a roof'
        },
        {
          src: 'deck-screen-and-door.jpg',
          alt: 'screened deck with a screen door'
        },
        { 
          src: 'deck-stairs-and-screen.jpg',
          alt: 'looking up deck stairs'
        },
        {
          src: 'deck-stairs.jpg',
          alt: 'looking down deck stairs'
        },
        
      ];
      break;
    case './public/covered-or-screened-deck/collages/3/':
      infoArray = [
        {
          src: 'backyard-with-no-deck.jpg',
          alt: 'backyard of house with concrete slab'
        },
        {
          src: 'deck-screen-and-door.jpg',
          alt: 'screened deck with screen door'
        },
        {
          src: 'deck-with-stairs-and-roof-and-porch-construction.jpg',
          alt: 'screened deck with stairs roof and an extended porch'
        },
        {
          src: 'deck-with-stairs-and-roof-and-porch.jpg',
          alt: 'deck and extended porch under construction'
        }
      ]
      break;
    case './public/covered-or-screened-deck/collages/4/':
      infoArray = [
        {
          src: 'deck-with-no-roof-and-stairs.jpg',
          alt: 'deck with stairs'
        },
        {
          src: 'deck-screen-porch-roof-and-stairs.jpg',
          alt: 'roofed deck with stairs and a screen'
        },
        {
          src: 'deck-porch-gate-stairs-and-screen.jpg',
          alt: 'screened and roofed deck with stairs and an extended porch'
        },
        {
          src: 'deck-screen-and-door.jpg',
          alt: 'screened deck with a screen door'
        },
        
        {
          src: 'deck-stairs-and-gate.jpg',
          alt: 'deck stairs looking up'
        },
        {
          src: 'deck-stairs.jpg',
          alt: 'deck stairs looking down with a gate at the top'
        },
        
      ];
      break;
    case './public/decks/collages/1/':
      infoArray = [
        {
          src: 'deck.jpg',
          alt: 'worn out deck with stairs'
        },
        {
          src: 'deck-roof.jpg',
          alt: 'deck with a roof and some steps'
        },
        {
          src: 'deck-stairs-and-roof.jpg',
          alt: 'deck with stairs and a roof'
        },
        {
          src: 'deck-stairs.jpg',
          alt: 'deck stairs with the roof in the background'
        },
        {
          src: 'deck-floor.jpg',
          alt: 'brown deck floor as well as a couple stairs'
        },
        {
          src: 'deck-ceiling.jpg',
          alt: 'deck ceiling along with the structure'
        },
      ];
      break;
    case './public/decks/collages/2/':
      infoArray = [
        {
          src: 'deck.jpg',
          alt: 'old worn out deck'
        },
        {
          src: 'deck-railing.jpg',
          alt: 'deck with curved railing and stairs'
        },
        {
          src: 'fresh-concrete.jpg',
          alt: 'fresh concrete slab poured in a backyard'
        },
        {
          src: 'deck-construction-in-progress.jpg',
          alt: 'construction from a different angle'
        },
        
        {
          src: 'deck-construction.jpg',
          alt: 'deck under construction'
        },
        {
          src: 'deck-with-stairs-and-pergola.jpg',
          alt: 'deck with curved special railing and a pergola overhead'
        },
        {
          src: 'deck-with-pergola-and-stairs.jpg',
          alt: 'deck with pergola and stairs finished'
        },
        {
          src: 'deck-floor-and-railing.jpg',
          alt: 'deck with stairs an overhead pergola and an extended porch'
        },
      ];
      break;
    case './public/decks/collages/3/':
      infoArray = [
        {
          src: 'old-deck-floor.jpg',
          alt: 'old deck floor and railing'
        },
        {
          src: 'deck-construction.jpg',
          alt: 'old deck floor with new railing being installed'
        },
        {
          src: 'deck-with-stairs-and-roof.jpg',
          alt: 'new railing and stairs installed along with new posts for a deck'
        },
        {
          src: 'deck-floor-railing.jpg',
          alt: 'new deck floor, railing and posts'
        },
        {
          src: 'finished-deck.jpg',
          alt: 'new deck floor, ceiling, and railing'
        },
      ];
      break;
    case './public/decks/collages/4/':
      infoArray = [
        {
          src: 'deck-stairs-bottom.jpg',
          alt: 'deck stairs from the bottom of the deck angle'
        },
        {
          src: 'deck-stairs-looking-down.jpg',
          alt: 'looking down deck stairs'
        },
        { src: 'deck-stairs-new.jpg', alt: 'deck stairs from a side angle' },
        { src: 'deck-stairs.jpg', alt: 'old and worn out deck stairs' },
        {
          src: 'deck-with-stairs-finished.jpg',
          alt: 'deck with no roof and stairs'
        },
        {
          src: 'deck-with-stairs.jpg',
          alt: 'old worn out deck stairs from a side view'
        },
        { src: 'long-deck-with-stairs.jpg', alt: 'deck with stairs' }
      ];
      break;
    default:
      break;
  }

  for (let index = 0; index < fileList.length; index++) {
    const element = altArray[index];
    newInfo.push({src: fileList[index], alt: altArray[index]});
  }
  //return(newInfo)        for building array in server console
  //return(infoArray)      to return the built object arrays
  return(infoArray);
}