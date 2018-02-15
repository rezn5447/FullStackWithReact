import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Col>
            <a href="/auth/google">Login With Google</a>
          </Col>
        );
      default:
        return [
          <Col key="1">
            <Payments />
          </Col>,
          <Col key="2" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </Col>,
          <Col key="3">
            <a href="/api/logout">Logout</a>
          </Col>
        ];
    }
  }

  render() {
    return (
      <Navbar brand="Emaily" right>
        <div className="nav-wrapper">
          <Row>{this.renderContent()}</Row>
        </div>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
