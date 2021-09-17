import { Component } from 'react';
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
    return <h1>form goes here</h1>;
  }
}
