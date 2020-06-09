import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Pupavka from './cards/pupavka';
import Smrci from './cards/smrci';
import BabinoUvo from './cards/babino_uvo';
import Tartuf from './cards/tartuf';
import {CSSTransitionGroup} from 'react-transition-group';

class Biljke extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="homeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="container-fluid full">
          <div className="main_ostale">
            <p>Gljive na Fruškoj gori</p>
          </div>
          <div className="top-txt">
            <p>
              Zahvaljujući geografskom položaju, klimatskim uslovima i bogatoj i
              razgranatoj hidrografskoj mreži, Fruška gora predstavlja pravu
              riznicu flore koja se može porediti sa mnogo većim i višim
              planinama u Srbiji.
            </p>
          </div>

          <div className="row row-kartice">
            <Pupavka />
            <Smrci />
            <BabinoUvo />
            <Tartuf />
          </div>
          <div className="footer"></div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default Biljke;
