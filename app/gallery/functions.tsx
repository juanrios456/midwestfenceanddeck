import fs from 'fs'

export function wow(directory:string){
  let imgFileName:any[] = [];
  let altArray:any = [];
  const fileList = fs.readdirSync(directory);

  switch (directory) {
    case './public/fences/wood/':
      altArray = [
         "Dog Ear Top 6 foot privacy fence with a gate at an inside view",
         "Dog ear 6 foot privacy fence",
         "Dog ear top privacy fence with a gate",
         "6 Foot privacy wood fence",
         "semi privacy dog ear wood fence next to a road",
         "4 foot dog ear top wood fence",
         "Horizontal wood fence, semi privacy",
         "6 foot wood fence, semi privacy",
         'wood fence with a lattice top and picture frame style',
         '6 foot woof fence with a lattice top',
         'picture frame style wood fence',
         'picture frame 6 foot wood fence',
         'Privacy picture frame style wood fence',
         '6 foot arch top privacy fence',
         'Arch top wood privacy fence',
         'Privacy wood fence with a arch at the top',
         'Gray painted privacy wood fence',
         'semi privacy wood picket fence with a small gate',
         'brown stained semi privacy 6 foot wood picket fence',
         '6 foot brown wood picket fence with flowers around it',
         'shadowbox wood fennce with a gate',
         'Tall shadowbox wood fence',
         'shadowbox wood fence from the inside',
         'Tall wood semi privacy fence with a picture fram style',
         '4 foot fence transitioning to a taller fence at the corner',
      ];
      break;
    case './public/fences/vinyl/':
      altArray = [
         'white vinyl fence with a gate',
         'tall white vinyl fence with one bush in front along a road',
         '6 foot white vinyl fence over grass next to a sidewalk',
         '4 foot semi privacy white vinyl fence over grass',
         'small white vinyl fence with an arch covering a corner and a tree',
         '4 foot semi privacy white vinyl fence with a gate',
         '4 foot gate made of vinyl',
      ];
      break;
    case './public/fences/steel-and-aluminum':
      altArray = [
         'Straight steel fence with the setting sun in the background',
         'semi privacy black steel fence with a view of how straight it is',
         '6 foot steel fence semi privacy',
         'steel pergogla over a steel fence gate',
      ];
      break;
    case './public/decks/before-and-after/':
      altArray = [
        'deck with a black fence around it outside the backdoor',
        'grass and a hill outside a door',
        'Brown deck balcony with a pergola and stairs over a new concrete slab',
        'deck with stairs that have white paint fading',
        'gray deck with a roof and stairs that leads to a small patio space',
        'red deck with fading paint and no roof',
        'deck balcony with a roof, screen and stairs over a new slab of concrete',
        'freshly poured concrete behind a house with no deck',
        'brown deck balcony with a roof and stairs that have lighting',
        'white house with a small red deck and no stairs',
        'brown deck with a roof surrounded by a screen and an outdoor patio with stairs leading down',
        'brown deck with no screen and missing trellis',
        'deck with stairs and railing with a gray that matches the house',
        'white deck with fading paint and metal railing',
        'gray deck floor with new flooring and white railing',
        'deck with old wood flooring',
        'deck with new gray wood flooring and white railing',
        'pool deck with old wood flooring and white railing with fading paint',
        'white porch deck with a roof that extends around the corner of the house',
        'deck with an inside porch and stairs that lead to a upstairs deck that is torn down',
        'porch deck with a natural looking roof and small stairs with a nice garden in front',
        'porch deck with a natural roof and stairs that have brown paint fading as well as the brown railing',
        'white and gray porch deck with stairs and nice railing',
        'white and blue porch deck with paint fading on the floor stairs and railing',
      ];
      break;

    default:
      break;
  }

  for (let index = 0; index < fileList.length; index++) {
    imgFileName.push({ src:fileList[index], alt: altArray[index] })
  }
  return(imgFileName);
}