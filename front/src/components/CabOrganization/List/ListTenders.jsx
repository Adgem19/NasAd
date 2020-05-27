import React, { Component } from 'react';
import Tenders from '../../CurrentUser/Tenders/MyTenders';
import { getFromBaseOfTender } from '../../../redux/advertiser/FetchData/fetchSendToBase'
import { connect } from 'react-redux';

class ListAuction extends Component {

  componentDidMount() {
    this.props.getFromBaseOfTender()
  }

  render() {
    console.log(this.props,"<<<<");
    
    return (
      <div>
        {this.props.tenders && <Tenders tenders={this.props.tenders} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tenders: state.advertiserReducer.tenders
  }
}

const mapDispatchToProps = {
  getFromBaseOfTender,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAuction);
