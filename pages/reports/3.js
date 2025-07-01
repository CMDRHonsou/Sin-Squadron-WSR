/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import CombatEvents from '../../components/combatEvents';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 3;
const startDate = '2024-12-01';
const endDate = '2025-06-30';
const submissionDate = '2025-07-01';

const orders = [
  {
    name: 'TIE-TC 1',
    id: 1,
    title: 'Capture of Zaarin',
  },
];

const competitions = [
{
  id: '7890',
  name: 'Citations for Sinners',
  ends: '2025-07-09',
  units: 'Sin Squadron',
  notes: 'As the name suggests, we will be aiming to increase our number of Squadron Citations currently sitting at 8. For those unaware, a Citation is awarded for Battles that at least 50% of the squadron have completed.',
  highlight: false,
},

];

const combatEvents = [
  /*{
    id: '',
    name: '',
    ends: '',
    notes: '',
  },*/   
];

const ACTIVITY = {
  // ------- Flight 1 -------
  // Honsou
  55973: {
    communication: 'Discord, E-Mail',
    flightActivity: 'SWS, EABF2, Elite Dangerous, HD2, Star Wars: Hunters.',
    otherActivity: 'CA:TO, Secret Order: Commander of the Guard.',
    notes: '',
  },
  
  // Newt
  56197: {
    communication: 'Discord',
    flightActivity: 'SWS, EABF2.',
    otherActivity: '',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'Star Conflict, Classics.',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'E-Mail',
    flightActivity: 'Star Conflict.',
	  otherActivity: '',
    notes: '',
  },
  
 // ------- Flight 2 -------
 // Jayden Halcorr
  56459: {
    communication: 'Discord',
    flightActivity: 'SWS, EABFI2, Elite Dangerous, HD2.',
    otherActivity: '',
    notes: '',
  },
  
  // Marenta
  708: {
    communication: 'Discord',
    flightActivity: 'SWS, EABF2, HD2.',
    otherActivity: '',
    notes: 'EH Communications Officer',
  },
  
  // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: 'Classics',
    otherActivity: '',
    notes: 'Welcome back Major!',
  },
  
   // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Star Conflict, Star Wars: Hunters.',
    otherActivity: 'TTT3 v3.1.0 programming, IOA.',
    notes: '',
  },
  
  // ------- Flight 3 -------
  // Gian Webb
  56586: {
    communication: 'Discord',
    flightActivity: 'SWS, EABF2, HD2, Classics.',
    otherActivity: '',
    notes: '',
  },
  
  // Jaxx Nassin
  56051: {
    communication: 'Discord',
    flightActivity: 'SWS, EABF2, HD2, Classics.',
    otherActivity: 'EH Logistics Officer.',
    notes: '',
  },
  
  // Lucas Lucky Finn
  56795: {
    communication: 'Discord',
    flightActivity: 'SWS',
    otherActivity: '',
    notes: '',
  },
  
  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'EABF2',
    otherActivity: '',
    notes: '',
  },
};

function appendActivityData(activityData, additionalActivityData) {
  return activityData.map((ad) => {
    if (additionalActivityData[ad.PIN]) {
      return { ...ad, ...additionalActivityData[ad.PIN] };
    }

    return ad;
  });
}

export default function Report({ activityData }) {
  if (activityData === null) {
    return 'Loading...';
  }

  const activity = appendActivityData(activityData, ACTIVITY);

  return (
    <>
      <Heading reportNumber={reportNumber} />

      <ReportDates
        startDate={startDate}
        endDate={endDate}
        submissionDate={submissionDate}
      />

      <Intro showUniform>
		    <p>
          <em>Hands clasped tightly behind his back, eyes closed for just a moment, Honsou listened to the myriad of conversations going on around him on the bridge of the M/Int Xanthe. The Sin Squadron commander had made the Xanthe his squadron's unofficial home away from home since the events of Imperial Storm, and now, following Sin's higher than satisfactory performance during  Squadron Remobilisation 7, they were back again. It was peaceful here, a smaller ship, but there was something about her. Something Honsou's keen senses were yet to determine even with his mastery of the Force. He slowly opened his eyes again as the dark void of space filled his vision, speckled with the pin pricks of light that were distant stars. Honsou allowed himself a small smile as he mused on where or what the Fleet Commander had in store for the Strike Fleet with his next orders.
A communications officer approached and saluted, Honsou still wasn't used to that. The plucky young man smiled broadly as he handed over a datapad. Honsou nodded in appreciation. Without a word he glanced over the messages, which included some expected transfers out of the squadron and some timely replacements for them. The shuttles would be arriving today and take the departing members back with them, no doubt to the FRG Phoenix. The ship where most of the TIE Corps reservists were housed, well, those that had moved to the reserves since this mission into the Unknown Regions had begun. With another nod, Honsou handed the datapad back to the young officer, who promptly saluted again and turned on his heel to march away. That part made Honsou chuckle. The lad was clearly new and was still walking as he'd been taught in officer college. "We'll see how long that lasts." He muttered to himself.
The Xanthe only had space for two squadrons of TIE class fighter craft along with it's compliment of four shuttles. One of the squadrons, Auresh, had been devastated during the recent conflict and Honsou had managed to have the remaining craft and pilots shifted over to Besh, as spares and reserves, leaving a hangar vacant for Sin squadron. He knew that soon enough, VA Fr0Zen would have to insist that a permanent replacement squadron be stationed here, but Honsou wasn't going to rush that. In fact, given his way, Sin would be that replacement squadron. However, the chances of leadership letting a squadron with Sin's reputation sit out on a Modified Interdictor rather than a powerful ISDII like the Warrior were remarkably slim. The Xanthe, a "418 Immobiliser" Class Heavy Cruiser had proved herself again and again in recent years, it seemed, right, that a vessel with a such a story and reputation should carry one of the battlegroup's storied squadrons. Considering Sin's reputation and the reputation that the Xanthe was rapidly developing, they would be an excellent fit... Honsou's thoughts trailed off as he saw the first shuttle exit hyperspace off in the distance. He brushed his uniform down with his hands and turned to head for the hangar, he would see to these arrivals and departures personally.</em>
        </p>
        <p>
          Greetings Sinners!
        </p>
        <p>Well, I blinked and another seven months has passed.
          I am still so very proud of you all. I couldn't possibly list everything, but we have had very strong showings across all major competitions over the last year and continue to have fun doing so! Following ReMob 7 we also have some interesting and amusing wiki updates for the squadron and it's members. Feel free to check those out.
        </p> 
        <p>Also, I would like to welcome those that have joined us and say a very fond farewell to those that have moved on. We have some more moving and shaking to come, so watch this space.
        </p>


      </Intro>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />
	  
	    {/*<CombatEvents combatEvents={combatEvents} />*/} 

      <Closing>
	  
		<p> My door is always open to all of you. If you need any help, guidance or just direction for some activities then please don’t hesitate to contact me on Discord or by email. If you’re online and gaming, drop in to one of our voice channels for visibility. You never know you might end up flying with some fellow Sinners or other members of the Corps.</p>
		<p> <b>Unleash Hell!</b> </p>
		<p> Colonel Honsou </p>

      <i><span style={{ color: "#bb0a1e" }}>"The old ones say we Sinners are descended from the Emperor himself. From the time a Sinner could fly, they were baptized in the fire of combat. 
        Taught never to retreat, never to surrender. Taught that death on the battlefield in service to the Empire was the greatest glory they could achieve."</span></i>
		
      </Closing>

      <Footer />
    </>
  );
}

/* eslint react/forbid-prop-types: 0 */
Report.propTypes = {
  activityData: T.any,
};

Report.defaultProps = {
  activityData: null,
};

export async function getStaticProps() {
  const activityData = await loadActivityData(config.squadronId, startDate, endDate);

  return {
    props: { activityData },
  };
}
