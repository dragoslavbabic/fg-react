import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Macka from './cards/macka';
import Jelen from './cards/jelen';
import Tvor from './cards/tvor';
import Vidra from './cards/vidra';
import {CSSTransitionGroup} from 'react-transition-group';

class Sisari extends Component {
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
            <p>Sisari na Fruškoj gori</p>
          </div>
          <div className="top-txt">
            <p>
              U harmoniji sa bogatom florom Fruškogorja obitava zanimljivo
              carstvo životinja čija se populacija sastoji od velikog broja
              veoma retkih primeraka zaštićenih kao prirodna bogatstva Srbije.
            </p>
          </div>

          <div className="row row-kartice">
            <Macka />
            <Jelen />
            <Tvor />
            <Vidra />
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default Sisari;
