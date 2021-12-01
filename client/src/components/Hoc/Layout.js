import Header from "../home/header";
import Footer from "../home/footer";
import { getSiteData } from "../../actions/site_actions";
import { connect } from "react-redux";
import React, { Component } from "react";

class Layout extends Component {
  componentDidMount() {
    if (Object.keys(this.props.site).length === 0) {
      this.props.dispatch(getSiteData());
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="page_container">{this.props.children}</div>
        <Footer 
          data={this.props.site}
        />
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    site: state.site,
  };
};

export default connect(mapStateToProps)(Layout);
