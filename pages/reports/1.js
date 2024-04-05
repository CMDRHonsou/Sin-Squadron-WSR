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
const submissionDate = '2024-04-06';

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
  id: '',
  name: '',
  ends: '',
  units: '',
  notes: '',
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
    flightActivity: '',
    otherActivity: 'TOA, LOA, Secret Order: Commander of the Guard',
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
    otherActivity: 'Official Sin Morale Officer',
    notes: '',
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
  
  // Lucas
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
          <em>Fiction</em>
        </p>
        <p>
          Greetings Sinners!
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
	  
		<p>My door is always open to all of you. If you need any help, guidance or just direction for some activities then please don’t hesitate to contact me on Discord of by email. If you’re online and gaming, drop in to one of our voice channels for visibility. You never know you might end up flying with some fellow Sinners or other members of the Corps.</p>
		<p>For Sin! </p>
		<p>LC Honsou </p>

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
