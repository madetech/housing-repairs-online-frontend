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
  })

})
