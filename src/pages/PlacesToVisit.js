import React from 'react'
import avalancheLake from "../images/avalancheLake.jpg"
import roseGarden from "../images/rose-garden.jpg"
import todaHamlet from "../images/toda-hamlet-school-mund-ooty.jpg"
import boatClub from "../images/lake-boat-club.jpg"
import doddabetta from "../images/doddabetta.jpg"

export default function PlacesToVisit() {
  return (
    <section className='w-[80%] m-auto flex-col items-center '>
      <div className='mb-4 pt-[150px]'>
        <h1 className='font-bold '>1. Avalanche Lake</h1>
        <img src={avalancheLake} alt="Avalanche Lake" />
     <ol className='ml-2' >
       <li >Recommended Duration: 2 Hours</li>
     </ol>
        <p  className='ml-2'>
        Located 28 km away from Ooty, Avalanche lake is a must visit when on Ooty Tour. This lake, beautifully lying amid the lush greenery of mountains and landscapes mesmerises every visitor. It was created due to a massive landslide somewhere around 1800s hence the name. It is popular for trout fishing and the required equipment for it can be taken from Trout hatchery. Along with exploring the surrounding areas and its rare flora and fauna, other activities that are popular here are camping, rafting and trekking to nearby hilly regions such as Upper Bhavani. It is also an ideal picnic spot.
        </p>
      </div>
       <div>
        <h1>2. Ooty Rose Garden</h1>
        <img src={roseGarden} alt="Rose Garden" srcset="" />
        <p>
        Ooty’s Rose Garden is a sight to behold offering more than 20000 varieties of roses. Striking displays of miniature roses, hybrid tea roses, yakimor, polyanthas, ramblers and floribunda is a feast to the eyes.

We give you the benefit of choosing packages covering major must-see places to visit in Ooty to make your three day visit most pleasing and rewarding.

The Heavenly paradise with its rolling hills, salubrious atmosphere, majestic lakes, and fascinating waterfalls greets visitors for the most spectacular excursion. The tranquilizing moment’s remains carved in your mind forever.

Check Our Ooty tour packages, we offer perfect tour package for all the passionate travellers seeking a holiday inspiration as it includes the major enticing and intriguing destinations. Head out for the best excursion ever, choosing from the below packages for a 3 day Ooty tour
        </p>
       </div>
       <div>
        <h1>3.Toda Hamlet / School Mund</h1>
        <img src={todaHamlet} alt="todaHamlet" srcset="" />
        <p>A bucolic retreat, the Toda Hamlet gives an insight into the lifestyle and culture of the Toda tribal community. The typical barrel shaped huts makes you feel that you have travelled back to the beginning of time.</p>
       </div>
       <div>
        <h1>4.Pykara Lake \ Boat Club</h1>
        <img src={boatClub} alt="boatClub" srcset="" />
        <p>Another stunning sightseeing spot among the places to visit in Ooty is the highly photographed Pykara Lake, flanked by gorgeous scenery which will enhance the charm of your visit. It’s hemmed in by beautiful rolling hills and surrounded by impressive scenery.

Touring the lake by a boat run by the Tamil Nadu Tourism Development Corporation gives you the best views of surrounding landscape with hills rising up behind it. Don’t miss the boat cruise that enables you to enjoy the relaxing ambience enveloping the lake.</p>
       </div>
       <div>
        <h1>4.Doddabetta</h1>
        <img src={doddabetta} alt="" srcset="" />
        <p>
        Surrounded by palatial tea estates, dense shola forests, manicured gardens, and mist clad mountains, Doddabetta Peak is one of the most brilliant sightseeing spots of Ooty.

Perched at a height of 2637m, it is a popular jumping off point to explore nature’s bounties. Witness the unmatched natural beauty encircling the peak through the telescopes at the Telescope House maintained by the Tamil Nadu Tourism Development Corporation.
        </p>
       </div>










        {/* <div>PlacesToVisit</div>
        <p>
        From nature walks in gardens that makes one wonder whether Paradise, as depicted in scriptures of various cultures, have actually been derived from such sensory experiences to relaxing over a cup of tea from the tea plantations dotting the hillside, only to realize most humbly of nature’s gifts as a bountiful provider, the tourist places in Ooty can be expected to resuscitate the soul, depleted of its spiritual reserves through the trials of everyday existence. 
        </p> */}
    </section>
 
  )
}
