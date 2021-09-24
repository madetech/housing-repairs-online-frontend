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
  nextStep (step, state, prevStep) {
    state.prevStep = prevStep ? prevStep : state.step
    state.step = step;
    this.setState(state);
    console.log(state)

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
    let nextFlowStep =  this.flow[state.step]?.nextStep
    if (nextFlowStep) {
      if (Array.isArray(nextFlowStep)) {
        const condition = nextFlowStep.find(o => o.condition === value);
        nextFlowStep = condition ? condition.nextStep : state.step;
      }
      return this.nextStep(nextFlowStep, state);
    }

    const { flowNextStep, flowPrevStep } = this._stepsFromUrl()
    state.prevStep = flowPrevStep;
    console.log(flowPrevStep)
    this.nextStep(flowNextStep, state, flowPrevStep);
  };

  _stepsFromUrl = () =>{
    const urlStep = window.location.pathname.split('/').pop()
    const flowNextStep = Object.keys(this.flow).find(key => this.flow[key].prevStep === urlStep);
    return {
      flowNextStep: flowNextStep,
      flowPrevStep: urlStep
    }
  }
}
