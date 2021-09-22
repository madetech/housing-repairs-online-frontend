export default class Flow {
  constructor(setState, history, path) {
    this.setState = setState;
    this.history = history;
    this.path = path;
    this.flow = {
      'type': {prevStep: false, nextStep: [
        {condition: 'emergency', nextStep: 'emergency'},
        {condition: 'non-emergency', nextStep: 'postcode'}
      ]},
      'postcode': {prevStep: 'type', nextStep: 'address'},
      'address': {prevStep: 'postcode', nextStep: 'confirmation'},
      'confirmation': {prevStep: 'address'}
    }
  }
  nextStep (step, state) {
    state.prevStep = state.step
    state.step = step;
    this.setState(state);
    this.history.push(`${this.path}/${step}`)
  };
  _prevStepIsNotDefinedOrEqualsCurrentStep = (state) => (state.prevStep === state.step || !state.prevStep)

  _prevStepIsInFlow = (state) => (this.flow[state.step] && this.flow[state.step].prevStep)

  prevStep = (state) => {
    // Clicking the back button twice will result in the current
    // step being the same as the previous step, so we need to
    // workout what the new previous step should be.
    if (this._prevStepIsNotDefinedOrEqualsCurrentStep(state)) {
      if (this._prevStepIsInFlow(state)) {
        state.prevStep = this.flow[state.step].prevStep
      } else {
        return this.history.push('/')
      }
    }
    state.step = state.prevStep
    this.setState(state);
    this.history.push(`${this.path}/${state.prevStep}`)
  }
  handleChange = (input, value, state) => {
    state.data[input] = value
    let nextFlowStep = this.flow[state.step].nextStep
    if (Array.isArray(nextFlowStep)) {
      nextFlowStep = nextFlowStep.find(o => o.condition === value).nextStep;
    }
    this.nextStep(nextFlowStep,state);
  };
}

