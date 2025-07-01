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

const reportNumber = 2;
const startDate = '2024-03-31';
const endDate = '2024-11-30';
const submissionDate = '2024-12-19';

const orders = [
  {
    name: 'TIE-TC 1',
    id: 1,
    title: 'Capture of Zaarin',
  },
];

const competitions = [
{
  id: '7891',
  name: 'Sinfantry and Squadron Training',
  ends: '2025-06-29',
  units: 'Sin Squadron',
  notes: 'A weekly get together for Sin Squadron (and anyone who cares to join us). Playing whatever TC supported game/s members happen to be in the mood for.',
  highlight: false,
}, 
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
    otherActivity: 'TOA, LOA, Secret Order: Commander of the Guard.',
    notes: '',
  },
  
  // Newt
  56197: {
    communication: 'Discord',
    flightActivity: 'SWS, EABF2',
    otherActivity: '',
    notes: 'Great to see CM Newt return from RSVs.',
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
    notes: 'Welcome to the SQXO role.',
  },
  
  // Marenta
  708: {
    communication: 'Discord',
    flightActivity: 'SWS, EABF2, HD2.',
    otherActivity: '',
    notes: 'Official Sin Squadron Morale Officer',
  },
  
  // OBS_Obiwan
  56789: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
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
    flightActivity: 'EABF2, HD2, Classics.',
    otherActivity: '',
    notes: 'Welcome to the FL role.',
  },
  
  // Jaxx Nassin
  56051: {
    communication: 'Discord',
    flightActivity: 'SWS, HD2.',
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
          <em>The light was dim and the air filled with a faint smokey haze in LC Honsou's office. It had been nine months since he had taken over as CMDR of Sin Squadron. So much had happened that he had not filed a report since his first. There was no way to recount all of the achievements of his pilots in that time, their accolades were too many. Seeing both Coremy and Oudik move to the FRG Phoenix and the reserves after battles with the Kilji had left Honsou very glad that the orange menace had been dealt with in this sector. Sin Squadron had played a major part in their defeat. With only Rho and Lambda squadrons racking up more victories in the final push. Captain Jayden Halcorr had stepped into the Squadron Executive Officer role and Commander Gian Webb into the Flight Leader position. Both had played an enormous part in the fight against the Kilji, and were both members of the Squadron's newly named Sinfantry Unit. Operating as both fighter squadron and Insertion/Extraction Spec Ops team during the conflict. Honsou drained his glass and poured another, "At least the Chalquilla is still good." He mused to himself as he puffed on one of the fine Tusorixian cigars that he liked to enjoy from time to time. There was a series of Binary chirps from under his desk. "No 00dles! You can't assassinate the Rho CMDR. I have told you a dozen times, Maston is Rho CMDR now. Our old rivalry was with Fr0Zen, when he led them and we were leading Tempest Squadron. That's ancient history." It certainly felt like it. Harsher beeps and boops followed. "I will have a droid tech wipe your memory if you threaten the BGCOM like that again, Mr!" Honsou retorted. There were a number of disgruntled, almost inaudible chirps after that. As Honsou looked back to his datapad something caught his eye, a smile and look of genuine nostalgia came across his face. Commander Newt was returning to active duty. An old friend from Tempest Squadron, and their request to be allocated to Sin Squadron had been approved. "Right!" Honsou announced, standing sharply. "Come on 00dles, we have an old friend to welcome aboard! Newt is back." He finished as he wiped the cigar ash from his uniform and placed the cigar in his makeshift ashtray. The MSE-06 droid nearly toppled itself as it quickly turned and shot off towards the hall. Honsou was sure that the bridge crew could hear all of the excited squealing coming from the little droid.</em>
        </p>
        <p>
          Greetings Sinners!<p>
          </p>
          What a whirlwind nine months it has been. We have had some ups and downs, but without a doubt our 3rd place podium finish in RtF 2024 turned some heads.
          I am so very proud of you all. I couldn't possibly list everything, but I would like to welcome those that have joined us and say a very fond farewell to those
          that have moved on. <p>
        </p>Congratulations to CPT Jayden Halcorr, and CM Gian Webb for undertaking the SQXO & FL roles respectively. Also a very warm welcome to CM Newt, back from the FRG Phoenix and reserves.'
        </p>


      </Intro>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />
	  
	    {/*<CombatEvents combatEvents={combatEvents} />*/} 

      <Closing>
	  
		<p> My door is always open to all of you. If you need any help, guidance or just direction for some activities then please don’t hesitate to contact me on Discord or by email. If you’re online and gaming, drop in to one of our voice channels for visibility. You never know you might end up flying with some fellow Sinners or other members of the Corps. Please bear with me whilst I get the code fixed for the Combat Ratings and FCHG Ratings, I have no idea why they are broken.</p>
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
