import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Gorocvet from './cards/gorocvet';
import Sremus from './cards/sremus';
import Siljorep from './cards/siljorep';
import Petrovac from './cards/petrovac';
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
            <p>Retke i lekovite biljke Fruške gore</p>
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
            <Gorocvet />
            <Sremus />
            <Siljorep />
            <Petrovac />
          </div>
          <div className="footer"></div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default Biljke;
