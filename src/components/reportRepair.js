import { Component } from 'react';
import { Postcode, Address, Confirmation} from './reportRepair';

export default class Report extends Component {
  state = {
    step: 1,
    postcode: '',
    address: '',
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {postcode, address} = this.state;
    const values = {postcode, address}

    switch (step) {
      case 1: 
        return (<Postcode
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}/>)
      case 2: 
        return (<Address 
          prevSteup={this.prevStep}
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}/>)
      case 3: 
        return (<Confirmation
        prevSteup={this.prevStep}tion 
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}/>)
      // never forget the default case, otherwise VS code would be mad!
      default: 
        // do nothing
        return <div>nothing</div>
    }
  }
}
