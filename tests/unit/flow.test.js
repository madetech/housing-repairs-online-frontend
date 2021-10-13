import Flow from '../../src/flow'

describe('Flow', () => {
  let setStateSpy;
  let historySpy;
  let pathDummy;
  let flow;

  beforeAll(() => {
    setStateSpy = jest.fn();
    historySpy = {
      push: jest.fn()
    };
    pathDummy = 'report-repair';

    flow = new Flow(setStateSpy, historySpy, pathDummy);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('nextStep', () =>{
    test('sets next step when there is no current step or previous step', () => {
      const step = 'somewhere';
      flow.nextStep(step, {prevStep: '', step: ''})
      expect(setStateSpy).toHaveBeenCalledWith({
        prevStep: '',
        step: step
      });
      expect(historySpy.push).toHaveBeenCalledWith(`${pathDummy}/${step}`);
    });

    test('overrides step when there is a current step and previous step', () => {
      const step = 'Three';
      flow.nextStep(step, {prevStep: 'One', step: 'Two'})
      expect(setStateSpy).toHaveBeenCalledWith({
        prevStep: 'Two',
        step: step
      });
      expect(historySpy.push).toHaveBeenCalledWith(`${pathDummy}/${step}`);
    });
  });

  describe('_prevStepIsNotDefinedOrEqualsCurrentStep', () => {
    test('returns true if previous step is not defined', () => {
      const state = {
        prevStep: '',
        step: 'anything'
      }
      let result = flow._prevStepIsNotDefinedOrEqualsCurrentStep(state)
      expect(result).toBe(true)
    })

    test('returns true if previous step equal step', () => {
      const state = {
        prevStep: 'anything',
        step: 'anything'
      }
      let result = flow._prevStepIsNotDefinedOrEqualsCurrentStep(state)
      expect(result).toBe(true)
    })

    test('returns false if previous step not equal step', () => {
      const state = {
        prevStep: 'something',
        step: 'anything'
      }
      let result = flow._prevStepIsNotDefinedOrEqualsCurrentStep(state)
      expect(result).toBe(false)
    })
  })

  describe('_prevStepIsInFlow', ()=>{
    test('returns true if previous step is in flow', ()=>{
      const state = {
        prevStep: '',
        step: 'address'
      }
      let result = flow._prevStepIsInFlow(state)
      expect(result).toBeTruthy()
    })

    test('returns false if previous step is in flow', ()=>{
      const state = {
        prevStep: '',
        step: 'something'
      }
      let result = flow._prevStepIsInFlow(state)
      expect(result).toBeFalsy()
    })
  })

  describe('prevStep', ()=>{
    test('changes step to previous step', ()=>{
      const state = {
        prevStep: 'postcode',
        step: 'address'
      }
      flow.prevStep(state);
      expect(setStateSpy).toHaveBeenCalledWith({
        prevStep: 'postcode',
        step: 'postcode'
      });
      expect(historySpy.push).toHaveBeenCalledWith(`${pathDummy}/postcode`);
    });

    describe('when step and previous step are equal', ()=> {
      test('find\'s previous step from flow', () => {
        const state = {
          prevStep: 'address',
          step: 'address'
        }
        flow.prevStep(state);
        expect(setStateSpy).toHaveBeenCalledWith({
          prevStep: 'postcode',
          step: 'postcode'
        });
        expect(historySpy.push).toHaveBeenCalledWith(`${pathDummy}/postcode`);
      });
    });

    describe('previous step is undefined and step is not in flow', ()=>{
      test('redirects to home', ()=>{
        const state = {
          prevStep: undefined,
          step: 'something'
        }
        flow.prevStep(state);
        expect(setStateSpy).not.toBeCalled();
        expect(historySpy.push).toHaveBeenCalledWith('/');
      });
    })
  });

  describe('handleChange', ()=> {
    describe('when next step is conditional', ()=>{
      describe('when condition exists', ()=>{
        test('next step and data are set appropriately', ()=>{
          flow.handleChange('field', 'emergency/2', {step: 'priority-list', data: {}});
          expect(setStateSpy).toHaveBeenCalledWith({
            prevStep: 'priority-list',
            step: 'emergency-repair',
            data: {
              'field': 'emergency/2'
            }
          });
          expect(historySpy.push).toHaveBeenCalledWith(`${pathDummy}/emergency-repair`);
        });
      });

      describe('when condition doesn\'t exist', ()=>{
        test('current step is reset and data is set', ()=>{
          flow.handleChange('field', 'bunnies', {step: 'priority-list', data: {}});
          expect(setStateSpy).toHaveBeenCalledWith({
            prevStep: 'priority-list',
            step: 'priority-list',
            data: {
              'field': 'bunnies'
            }
          });
          expect(historySpy.push).toHaveBeenCalledWith(`${pathDummy}/priority-list`);
        });
      })
    });

    describe('when next step is unconditional', ()=>{
      test('next step and data are set appropriately', ()=>{
        flow.handleChange('field', 'M3 0W', {step: 'postcode', data: {}});
        expect(setStateSpy).toHaveBeenCalledWith({
          prevStep: 'postcode',
          step: 'address',
          data: {
            'field': 'M3 0W'
          }
        });
        expect(historySpy.push).toHaveBeenCalledWith(`${pathDummy}/address`);
      });
    });

    describe('when current step doesn\'t have a next step', ()=>{
      test('next step and data are set appropriately', ()=>{
        global.window = Object.create(window);
        Object.defineProperty(window, 'location', {
          value: {
            pathname: '/report-repair/priority-list'
          }
        });

        flow.handleChange('field', 'value', {step: 'emergency', data: {}});
        expect(setStateSpy).toHaveBeenCalledWith({
          prevStep: 'priority-list',
          step: 'communal',
          data: {
            'field': 'value'
          }
        });
        expect(historySpy.push).toHaveBeenCalledWith(`${pathDummy}/communal`);
      });
    })
  });
})
