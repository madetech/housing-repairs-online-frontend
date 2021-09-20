import { Component } from 'react';
import ReportRepair from '../components/reportRepair'

export default class ReportRepairPage extends Component {
  componentDidMount() {
    document.title = 'Report a repair';
  }
  render() {
    return (
      <div><ReportRepair/></div>
    )
  }
}
