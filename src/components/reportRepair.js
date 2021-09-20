import { Component } from 'react';
import Postcode from './reportRepair/postcode';
import Address from './reportRepair/address';
import Confirmation from './reportRepair/confirmation';
import TypeOfRepair from './reportRepair/typeOfRepair';
import Emergency from './reportRepair/emergency';

export default class Report extends Component {
  state = {
    step: 1,
    postcode: '',
    address: '',
  };
  prevStep = () => {
    const { prevStep, step } = this.state;
    const backstep = step - 1;
    this.setState({ prevStep: backstep > 0 ? backstep : 1});
    this.setState({ step: prevStep });
  };
  nextStep = (skipTo) => {
    const { step } = this.state;
    this.setState({ prevStep: step });
    if (skipTo) {
      this.setState({ step: skipTo });
    } else {
      this.setState({ step: step + 1 });
    }
  };
  handleChange = (input, value) => {
    this.setState({ [input]: value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.step !== 1) {
      const back = this.prevStep
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', function (event){
        window.history.replaceState(null, document.title, window.location.href);
        back();
      });
    }
  }

  render() {
    const { step } = this.state;
    const {postcode, address} = this.state;
    const values = {postcode, address}

    switch (step) {
    case 1:
      return (<TypeOfRepair
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}/>)
    case 2:
      return (<Postcode
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}/>)
    case 3:
      return (<Address
        prevStep={this.prevStep}
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}/>)
    case 4:
      return (<Confirmation
        values={values}/>)
    // never forget the default case, otherwise VS code would be mad!
    case 5:
      return (<Emergency/>)
    default:
      // do nothing
      return <div>nothing</div>
    }
  }
}
