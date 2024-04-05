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

const reportNumber = 1;
const startDate = '2024-03-01';
const endDate = '2024-03-31';
const submissionDate = '2024-04-05';

const citations = [
  'XvT-TC 1',
  'XvT-TC 3',
  'XvT-TC 14',
  'XWA-TC 4',
]; // Current for squadron citations.
const citationsChange ='';
// Use: citations.js for citations that are close to being complete.

const orders = [
  {
    name: 'TIE-TC 1',
    id: 1,
    title: 'Capture of Zaarin',
  },
];

const competitions = [
{
  id: '7736',
  name: 'SWTOR Conquest 2: The search for more Conquest, Season 3',
  ends: '2024-04-30',
  units: 'entire TIE Corps',
  notes: 'Points, points, points... Personal placement and organisation guild progress. Hosted by LC Gytheran.',
  highlight: false,
}, 
{
  id: '7767',
  name: 'How to Elite Dangerously 2.0',
  ends: '2024-06-28',
  units: 'entire TIE Corps',
  notes: 'As the name suggests, FAQ and gaming together. Hosted by LC Honsou & MAJ Taurus.',
  highlight: false,
},
{
  id: '7748',
  name: 'Rho Watch Party',
  ends: '2024-12-31',
  units: 'Battlegroup II',
  notes: 'Joining members of Rho to watch a movie each month. Hosted by CPT Maston Dane and Rho Squadron.',
  highlight: false,
},
{
  id: '7737',
  name: 'PvE Ace of the TIE Corps 2024 - Season One',
  ends: '2024-04-30',
  units: 'entire TIE Corps',
  notes: 'PvE, monthly and season awards available. Hosted by AD Phoenix Berkana.',
  highlight: false,
},
{
  id: '7738',
  name: 'PvP Ace of the TIE Corps 2024 - Season One',
  ends: '2024-04-30',
  units: 'entire TIE Corps',
  notes: 'PvP, monthly and season awards available. Hosted by AD Phoenix Berkana.',
  highlight: false,
},
{
  id: '7739',
  name: 'SP Ace of the TIE Corps 2024 - Season One',
  ends: '2024-04-30',
  units: 'entire TIE Corps',
  notes: 'SP, monthly and season awards available. Hosted by AD Phoenix Berkana.',
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
    flightActivity: 'Elite Dangerous, EABF2, Star Conflict',
    otherActivity: 'TOA, LOA, Secret Order: Commander of the Guard.',
    notes: '',
  },
  
  // Charlie Halcorr
  56764: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'E-Mail',
    flightActivity: 'Star Conflict',
	  otherActivity: '',
    notes: '',
  },
  
 // ------- Flight 2 -------
 // Coremy Jertese
  7782: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Marenta
  708: {
    communication: 'Discord',
    flightActivity: 'Squadrons, EABF2, Star Conflict',
    otherActivity: '',
    notes: 'Official Sin Squadron Morale Officer',
  },
  
  // OBS_Obiwan
  56789: {
    communication: 'Discord',
    flightActivity: 'Squadrons',
    otherActivity: '',
    notes: '',
  },
  
   // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Star Conflict',
    otherActivity: 'TTT3 v3.1.0 programming',
    notes: '',
  },
  
  // ------- Flight 3 -------
  // Oudik-Delta-4
  56571: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Chity'ke'nik
  56786: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Lucas Lucky Finn
  56795: {
    communication: 'Discord',
    flightActivity: 'Squadrons',
    otherActivity: 'Fiction Writing',
    notes: '',
  },
  
  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: '',
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
          <em>Standing swiftly and retrieving his duffle bag from the racking, Honsou headed for the descending access rank of the Imperial Lambda class shuttle. He'd arrived on the ISDII Warrior to take up his latest assignment, command of the infamous Sin Squadron. Honsou knew this was his true calling. He'd been referred to as, rough round the edges, a loose cannon, and a number of other things during his time in the TIE Corps. Leading "The Unrepentant" seemed almost poetic and very appropriate. As Honsou reached the top of the ramp, he was accompanied by his confidante, the custom MSE-6-series repair (mouse) droid called "00dles." 00dles gave a series of binary chirps and beeps in a curious tone. Honsou smiled as he glanced down, "Yes, buddy, the Warrior is our home now. Also, yes, Rho Squadron is here too." There was an excited squeal and the droid raced off the ramp and across the hangar. Honsou pondered for a moment as he walked down the incline and onto the hangar deck. Taking in a deep breath, Honsou closed his eyes, the air smelled fresh for a hangar. Or at least it was lacking the damp Ewok fur smell of the ISDII Hammer and the smell of grease and oil from the aged ships of the Infiltrator Wing, on the ISDII Challenge. Honsou's eyes snapped open, 00dles had remembered the old rivalry between Tempest and Rho Squadron... Breaking into a sprint, Honsou surged across the hangar "00dles! Don't you dare!"</em>
        </p>
        <p>
          Greetings Sinners!
          Some of you know me, some do not. My name is Honsou and I am proud to say that I am the new CMDR of Sin Squadron.
          Short form report this time, as I work to get my admin squared away. I look forward to getting to know you all, and working with you going forwards!
        </p>


      </Intro>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />
	  
	    {/*<CombatEvents combatEvents={combatEvents} />*/} 

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
	  
		<p> My door is always open to all of you. If you need any help, guidance or just direction for some activities then please don’t hesitate to contact me on Discord or by email. If you’re online and gaming, drop in to one of our voice channels for visibility. You never know you might end up flying with some fellow Sinners or other members of the Corps.</p>
		<p> <b>Unleash Hell!</b> </p>
		<p> Lieutenant Colonel Honsou </p>

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
