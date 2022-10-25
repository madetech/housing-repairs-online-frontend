import { useRouter } from 'next/router';
import Address from '../../components/report-repair/address';
import Communal from '../../components/report-repair/communal';
import EmergencyRepair from '../../components/report-repair/emergency-repair';
import NotEligible from '../../components/report-repair/not-eligible';
import NotEligibleCommunalRepairs from '../../components/report-repair/not-eligible-communal-repairs';
import Postcode from '../../components/report-repair/postcode';
import PriorityList from '../../components/report-repair/priority-list';
import RepairLocation from '../../components/report-repair/repair-location';
import SmellGas from '../../components/report-repair/smell-gas';
import Flow from '../../flow';
import { useEffect, useState } from 'react';
import React from 'react';
import BackLink from '../../components/backLink';
import RepairProblem from '../../components/report-repair/repair-problem';
import RepairProblemBestDescription from '../../components/report-repair/repair-problem-best-description';
import RepairDescription from '../../components/report-repair/repair-description';
import RepairAvailability from '../../components/report-repair/repair-availability';
import Summary from '../../components/report-repair/summary';
import ContactPerson from '../../components/report-repair/contact-person';
import ContactDetails from '../../components/report-repair/contact-details';
import Confirmation from '../../components/report-repair/confirmation';
import Error from '../../components/error';
import NotEligibleNonEmergency from '../../components/report-repair/not-eligible-non-emergency';
import UnableToBook from '../../components/report-repair/unable-to-book';
import { Layout } from '../../components/layout';
import { serviceName } from '../../helpers/constants';

function ReportRepair() {
  const [state, setState] = useState({ data: {}, step: 'priority-list' });
  const [changeLinkUrls, setChangeLinkUrls] = useState({});
  const router = useRouter();

  const currentPath = router.query.route;

  const [prevSteps, setPrevSteps] = useState([]);

  const flow = new Flow(
    setState,
    router,
    'report-repair',
    prevSteps,
    setPrevSteps
  );

  useEffect(() => {
    router.beforePopState(({ as }) => {
      flow.prevStep(state);
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  const handleChange = (input, value) => {
    flow.handleChange(input, value, state);
  };

  const goToStep = (step, prevStep) => {
    flow.nextStep(step, state, prevStep);
  };

  const [showBack, setShowBack] = useState(true);
  // Would not have to do this default initialisation if the code was structured like a normal NextJS application
  const [confirmation, setConfirmation] = useState({
    govNotifyStatus: '',
    reference: '',
    contactDetails: '',
  });
  const [formError, setFormError] = useState();

  const cleanPayload = (payload) => {
    delete payload.availability.appointmentSlotKey;
  };

  const submit = (values) => {
    cleanPayload(values);
    fetch('/api/repair', {
      method: 'POST',
      body: JSON.stringify({
        postcode: values.postcode,
        address: values.address,
        location: values.repairLocation,
        problem: values.repairProblem,
        issue: values.repairProblemBestDescription,
        contactPersonNumber: values.contactPersonNumber,
        description: values.description,
        contactDetails: values.contactDetails,
        time: values.availability,
      }),
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        setShowBack(false);
        router.push('confirmation');
        return response.json().then((response) => {
          setConfirmation({
            contactDetails: values.contactDetails.value,
            reference: response.reference,
            govNotifyStatus: response.govNotifyStatus,
          });
        });
      }
      window.history.scrollRestoration = 'manual';
      setFormError(
        <Error
          name="summary"
          heading="An error occurred while processing your request"
          body="Please call 0208 498 8000 or 0800 393994 to complete your repair request"
        />
      );
    });
  };

  const commonProblems = {
    wallsFloorAndCeiling: {
      value: 'wallsFloorsCeiling',
      title: 'Walls, floor or ceiling, excluding damp',
    },
    sink: { value: 'sink', title: 'Sink, including taps and drainage' },
    damagedOrStuckDoors: {
      value: 'damagedOrStuckDoors',
      title: 'Damaged or stuck doors',
    },
    electricsLightsSwitches: {
      value: 'electricsLightsSwitches',
      title: 'Electrics, including lights and switches',
    },
    windows: { value: 'windows', title: 'Damaged or stuck windows' },
    dampOrMould: { value: 'dampOrMould', title: 'Damp or mould' },
    heatingOrHotWater: {
      value: 'heatingOrHotWater',
      title: 'Heating or hot water',
    },
    heating: { value: 'heating', title: 'Heating' },
  };

  const prevStep = (e) => {
    e?.preventDefault();
    flow.prevStep(state);
  };
  const values = state.data;
  const changeLinkUrlValues = changeLinkUrls;

  const component = () => {
    switch (currentPath) {
      case 'summary':
        return (
          <Summary
            getNextStepFromCondition={flow.getNextStepFromCondition}
            goToStep={goToStep}
            submit={submit}
            values={values}
          />
        );
      case 'confirmation':
        return <Confirmation confirmation={confirmation} />;
      case 'contact-person':
        return <ContactPerson handleChange={handleChange} values={values} />;
      case 'contact-details':
        return <ContactDetails handleChange={handleChange} values={values} />;
      case 'address':
        return <Address handleChange={handleChange} values={values} />;
      case 'communal':
        return <Communal handleChange={handleChange} values={values} />;
      case 'emergency-repair':
        return <EmergencyRepair />;
      case 'not-eligible':
        return <NotEligible />;
      case 'not-eligible-non-emergency':
        return <NotEligibleNonEmergency />;
      case 'not-eligible-communal-repairs':
        return <NotEligibleCommunalRepairs />;
      case 'unable-to-book':
        return <UnableToBook />;
      case 'postcode':
        return <Postcode handleChange={handleChange} values={values} />;
      case 'priority-list':
        return <PriorityList handleChange={handleChange} values={values} />;
      case 'repair-location':
        return <RepairLocation handleChange={handleChange} values={values} />;
      case 'repair-kitchen-problems':
        return (
          <RepairProblem
            handleChange={handleChange}
            values={values}
            options={[
              {
                value: 'cupboards',
                title: 'Cupboards, including damaged cupboard doors',
              },
              {
                value: 'electrical',
                title: 'Electrical, including extractor fans and lightbulbs',
              },
              { value: 'worktop', title: 'Damaged worktop' },
              commonProblems.heatingOrHotWater,
              { value: 'door', title: 'Damaged or stuck doors' },
              commonProblems.wallsFloorAndCeiling,
              commonProblems.sink,
              commonProblems.windows,
              commonProblems.dampOrMould,
            ]}
          />
        );
      case 'repair-bathroom-problems':
        return (
          <RepairProblem
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'bath', title: 'Bath, including taps' },
              commonProblems.wallsFloorAndCeiling,
              {
                value: 'electricsExtractorCords',
                title: 'Electrics, including extractor fan and pull cords',
              },
              commonProblems.windows,
              commonProblems.sink,
              { value: 'dampOrMould', title: 'Damp or mould' },
              commonProblems.damagedOrStuckDoors,
              {
                value: 'showerIncludingTrayAndDoor',
                title: 'Shower, including the tray and shower door',
              },
              { value: 'toilet', title: 'Toilet' },
              commonProblems.heatingOrHotWater,
            ]}
          />
        );
      case 'repair-bedroom-problems':
        return (
          <RepairProblem
            handleChange={handleChange}
            values={values}
            options={[
              commonProblems.electricsLightsSwitches,
              commonProblems.wallsFloorAndCeiling,
              commonProblems.windows,
              commonProblems.damagedOrStuckDoors,
              commonProblems.dampOrMould,
              commonProblems.heating,
            ]}
          />
        );
      case 'repair-living-areas-problems':
        return (
          <RepairProblem
            handleChange={handleChange}
            values={values}
            options={[
              commonProblems.electricsLightsSwitches,
              commonProblems.wallsFloorAndCeiling,
              commonProblems.windows,
              commonProblems.damagedOrStuckDoors,
              commonProblems.dampOrMould,
              { value: 'stairs', title: 'Stairs (including handrail)' },
              commonProblems.heating,
            ]}
          />
        );

      case 'repair-stairs-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'damagedSteps', title: 'Damaged stairs' },
              { value: 'damagedPalistrades', title: 'Damaged palistrades' },
              { value: 'handRail', title: 'Handrail' },
              { value: 'stairRailLoose', title: 'Stair rail come loose' },
            ]}
          />
        );
      case 'repair-toilet-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'notFlushing', title: 'Not flushing' },
              { value: 'overflowing', title: 'Overflowing' },
              {
                value: 'looseFromFloorOrWall',
                title: 'Coming loose from the floor or wall',
              },
              { value: 'cracked', title: 'Cracked' },
              { value: 'seat', title: 'Toilet seat' },
            ]}
          />
        );
      case 'repair-outside-problems':
        return (
          <RepairProblem
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'door', title: 'Door, including shed and outhouse' },
              { value: 'securityLights', title: 'Outdoor security lights' },
              {
                value: 'roof',
                title: 'Roof, including insulation and shed roof',
              },
              { value: 'garage', title: 'Garage, including roof and door' },
              { value: 'gatesAndPathways', title: 'Gates and pathways' },
            ]}
          />
        );
      case 'repair-garage-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'doorDamage', title: 'Door damage' },
              { value: 'lockDamage', title: 'Lock damage' },
              { value: 'brokenInto', title: 'Broken into' },
              { value: 'roofIssueOrLeak', title: 'Roof issue or leak' },
              { value: 'securityLights', title: 'Outdoor security lights' },
            ]}
          />
        );
      case 'outside-roof-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'shedOuthouseRoof', title: 'Shed or outhouse roof' },
              { value: 'loftInsulation', title: 'Loft insulation' },
              { value: 'looseTiles', title: 'Loose tiles' },
              { value: 'flatRoofProblems', title: 'Problem with a flat roof' },
              { value: 'securityLights', title: 'Outdoor security lights' },
            ]}
          />
        );
      case 'gates-and-pathways-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'frontGate', title: 'Front gate' },
              { value: 'backGate', title: 'Back gate' },
              { value: 'driveway', title: 'Driveway' },
              {
                value: 'concretePath',
                title: 'Concrete path around the property',
              },
              { value: 'steps', title: 'Steps' },
            ]}
          />
        );
      case 'outside-door-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'shedDoor', title: 'Shed door' },
              {
                value: 'outhouseCupboardDoor',
                title: 'Outhouse cupboard door',
              },
              { value: 'woodenBackDoor', title: 'Wooden back door' },
              { value: 'upvcBackDoor', title: 'UPVC back door' },
              { value: 'frenchDoors', title: 'French doors' },
            ]}
          />
        );
      case 'repair-window-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'smashed', title: 'Smashed window(s)' },
              { value: 'stuckOpen', title: 'Window stuck open' },
              { value: 'stuckShut', title: 'Window stuck shut' },
              { value: 'condensation', title: 'Condensation' },
            ]}
          />
        );
      case 'repair-shower-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'electricShowerUnit', title: 'Electric shower unit' },
              { value: 'showerTap', title: 'Tap shower' },
              { value: 'showerHose', title: 'Shower hose' },
              { value: 'showerHead', title: 'Shower head' },
              { value: 'showerTrayBroken', title: 'Shower tray broken' },
              { value: 'cubicleDoorBroken', title: 'Cubicle door broken' },
              { value: 'showerDrainBlocked', title: 'Shower drain blocked' },
            ]}
          />
        );
      case 'repair-door-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              {
                value: 'internalDoorIssue',
                title:
                  'Internal door issue, including hinges, handle, sticking',
              },
              { value: 'lockOnDoor', title: 'Lock on the door' },
              {
                value: 'adjustingDoorAfterCarpetFitting',
                title: 'Adjusting a door after a carpet fitting',
              },
            ]}
          />
        );
      case 'repair-living-area-door-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              {
                value: 'internalDoorIssue',
                title:
                  'Internal door issue, including hinges, handle, sticking',
              },
              { value: 'lockOnDoor', title: 'Lock on the door' },
              {
                value: 'adjustingDoorAfterCarpetFitting',
                title: 'Adjusting a door after a carpet fitting',
              },
            ]}
          />
        );
      case 'repair-bedroom-door-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              {
                value: 'internalDoorIssue',
                title:
                  'Internal door issue, including hinges, handle, sticking',
              },
              {
                value: 'adjustingDoorAfterCarpetFitting',
                title: 'Adjusting a door after a carpet fitting',
              },
            ]}
          />
        );
      case 'repair-bedroom-lighting-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'lights', title: 'Lights' },
              { value: 'sockets', title: 'Sockets' },
            ]}
          />
        );
      case 'bathroom-damp-mould-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'emergency', title: 'Damp or mould caused by a leak' },
              {
                value: 'dampOrMould',
                title: 'Damp or mould caused by something else',
              },
            ]}
          />
        );
      case 'repair-living-areas-lighting-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'lights', title: 'Lights' },
              { value: 'sockets', title: 'Sockets' },
            ]}
          />
        );
      case 'repair-bathroom-electric-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'spotLights', title: 'Spot lights' },
              { value: 'tubeLights', title: 'Tube light' },
              { value: 'pullCord', title: 'Pull cord for light or shower' },
              { value: 'extractorFan', title: 'Extractor fan not working' },
            ]}
          />
        );
      case 'repair-kitchen-cupboard-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'doorHangingOff', title: 'Hanging door' },
              { value: 'doorMissing', title: 'Missing door' },
            ]}
          />
        );
      case 'kitchen-electrical-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'extractorFan', title: 'Extractor fan' },
              { value: 'sockets', title: 'Socket(s)' },
              { value: 'lightFitting', title: 'Light fitting(s)' },
              { value: 'cookerSwitch', title: 'Cooker switch' },
            ]}
          />
        );
      case 'bath-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'bathTaps', title: 'Bath taps' },
              { value: 'sealAroundBath', title: 'Seal around bath' },
              { value: 'bathPanel', title: 'Bath panel' },
              { value: 'bathBlockage', title: 'Blockage' },
            ]}
          />
        );
      case 'kitchen-door-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'backDoorWooden', title: 'Wooden back door' },
              { value: 'backDoorUPVC', title: 'UPVC back door' },
              { value: 'backFrenchDoors', title: 'French doors' },
              {
                value: 'internal',
                title:
                  'Internal door issue, including hinges, handle, sticking',
              },
              { value: 'sliding', title: 'Sliding door' },
            ]}
          />
        );
      case 'wall-floor-ceiling-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'wallTiles', title: 'Wall tiles' },
              { value: 'floorTiles', title: 'Floor tiles' },
              { value: 'lightFitting', title: 'Light fitting(s)' },
              {
                value: 'skirtingBoardArchitrave',
                title: 'Skirting boards or architraves',
              },
              {
                value: 'plasteringCeiling',
                title: 'Plastering on the ceiling',
              },
              { value: 'plasteringWalls', title: 'Plastering on the walls' },
              { value: 'woodenFloorboards', title: 'Wooden floorboards' },
            ]}
          />
        );
      case 'sink-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              { value: 'taps', title: 'Tap(s)' },
              { value: 'pipeworkLeak', title: 'Pipework leak' },
              { value: 'leakBlockage', title: 'Leak or blockage' },
              { value: 'damageSink', title: 'Damage to the sink' },
            ]}
          />
        );
      case 'damp-mould-problems':
        return (
          <RepairProblemBestDescription
            handleChange={handleChange}
            values={values}
            options={[
              {
                value: 'dampMouldCausedByLeak',
                title: 'Damp or mould caused by a leak',
              },
              {
                value: 'dampOrMould',
                title: 'Damp or mould caused by something else',
              },
            ]}
          />
        );
      case 'smell-gas':
        return <SmellGas />;
      case 'repair-description':
        return (
          <RepairDescription handleChange={handleChange} values={values} />
        );
      case 'repair-availability':
        return (
          <RepairAvailability
            handleChange={handleChange}
            values={values}
            fromDate={router.query.fromDate}
          />
        );
      default:
        return <div>Not found</div>;
    }
  };

  return (
    <Layout title={getTitle(currentPath, !!formError)}>
      {showBack && (
        <BackLink href="#" onClick={prevStep}>
          Back
        </BackLink>
      )}
      <main className="govuk-main-wrapper" id="main-content">
        {formError}
        {component()}
      </main>
    </Layout>
  );
}

// Just copying the function from inside the component to get this working
// without making any mistakes, this really needs a large refactor
//
// These title are repeated in each of the components but because of the lack
// of Typescript and the way that this has been built, it's too difficult to
// abstract this properly without making a mistake in the time that we have.
function getTitle(route, isError) {
  let title;
  if (isError) {
    title = 'An error occurred while processing your request';
  } else {
    switch (route) {
      case 'summary':
        title = 'Request summary';
        break;
      case 'confirmation':
        title = 'Repair request complete';
        break;
      case 'contact-person':
        title = 'What number should we call, if we need to get in touch?';
        break;
      case 'contact-details':
        title = 'How should we confirm the appointment?';
        break;
      case 'address':
        title = 'Select an address';
        break;
      case 'communal':
        title = 'Is the problem in a communal area?';
        break;
      case 'emergency-repair':
        title = 'Your repair could be an emergency';
        break;
      case 'not-eligible':
        title =
          'The council may not be responsible for repairs at this property';
        break;
      case 'not-eligible-non-emergency':
        title =
          'The council may not be responsible for this repair at this property';
        break;
      case 'not-eligible-communal-repairs':
        title =
          'For communal repairs, please call us during the office hours below';
        break;
      case 'unable-to-book':
        title = 'Your repair could not be booked';
        break;
      case 'postcode':
        title = 'What is the property postcode?';
        break;
      case 'priority-list':
        title = 'What is the problem you are reporting?';
        break;
      case 'repair-location':
        title = 'Where is the problem?';
        break;
      case 'repair-kitchen-problems' ||
        'repair-bathroom-problems' ||
        'repair-bedroom-problems' ||
        'repair-living-areas-problems' ||
        'repair-outside-problems':
        title = 'What is the problem?';
        break;
      case 'repair-stairs-problems' ||
        'repair-toilet-problems' ||
        'repair-garage-problems' ||
        'outside-roof-problems' ||
        'gates-and-pathways-problems' ||
        'outside-door-problems' ||
        'repair-window-problems' ||
        'repair-shower-problems' ||
        'repair-door-problems' ||
        'repair-living-area-door-problems' ||
        'repair-bedroom-door-problems' ||
        'repair-bedroom-lighting-problems' ||
        'bathroom-damp-mould-problems' ||
        'repair-living-areas-lighting-problems' ||
        'repair-bathroom-electric-problems' ||
        'repair-kitchen-cupboard-problems' ||
        'kitchen-electrical-problems' ||
        'bath-problems' ||
        'kitchen-door-problems' ||
        'wall-floor-ceiling-problems' ||
        'sink-problems' ||
        'damp-mould-problems':
        title = 'What best describes the problem?';
        break;
      case 'smell-gas':
        title = 'If you smell gas';
        break;
      case 'repair-description':
        title = 'Describe your problem in more detail';
        break;
      case 'repair-availability':
        title = 'When are you available?';
        break;
      default:
        title = 'Not found';
        break;
    }
  }

  return `${title} - ${serviceName}`;
}

export async function getStaticPaths() {
  const paths = [
    { params: { route: 'summary' } },
    { params: { route: 'address' } },
    { params: { route: 'confirmation' } },
    { params: { route: 'communal' } },
    { params: { route: 'emergency-repair' } },
    { params: { route: 'contact-person' } },
    { params: { route: 'contact-details' } },
    { params: { route: 'not-eligible' } },
    { params: { route: 'not-eligible-non-emergency' } },
    { params: { route: 'not-eligible-communal-repairs' } },
    { params: { route: 'unable-to-book' } },
    { params: { route: 'postcode' } },
    { params: { route: 'priority-list' } },
    { params: { route: 'repair-location' } },
    { params: { route: 'smell-gas' } },
    { params: { route: 'repair-kitchen-problems' } },
    { params: { route: 'sink-problems' } },
    { params: { route: 'repair-bathroom-problems' } },
    { params: { route: 'repair-bedroom-problems' } },
    { params: { route: 'bathroom-damp-mould-problems' } },
    { params: { route: 'repair-living-areas-problems' } },
    { params: { route: 'repair-living-areas-lighting-problems' } },
    { params: { route: 'wall-floor-ceiling-problems' } },
    { params: { route: 'repair-stairs-problems' } },
    { params: { route: 'bath-problems' } },
    { params: { route: 'damp-mould-problems' } },
    { params: { route: 'kitchen-electrical-problems' } },
    { params: { route: 'kitchen-door-problems' } },
    { params: { route: 'repair-kitchen-cupboard-problems' } },
    { params: { route: 'repair-bedroom-lighting-problems' } },
    { params: { route: 'repair-bathroom-electric-problems' } },
    { params: { route: 'repair-living-area-door-problems' } },
    { params: { route: 'repair-bedroom-door-problems' } },
    { params: { route: 'repair-door-problems' } },
    { params: { route: 'repair-toilet-problems' } },
    { params: { route: 'repair-garage-problems' } },
    { params: { route: 'repair-window-problems' } },
    { params: { route: 'repair-outside-problems' } },
    { params: { route: 'outside-roof-problems' } },
    { params: { route: 'outside-door-problems' } },
    { params: { route: 'gates-and-pathways-problems' } },
    { params: { route: 'repair-shower-problems' } },
    { params: { route: 'repair-description' } },
    { params: { route: 'repair-availability' } },
    { params: { route: 'smell-gas' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({}) {
  return { props: {} };
}
export default ReportRepair;
