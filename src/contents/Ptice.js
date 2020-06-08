import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Orao from '../contents/cards/orao';
import Roda from './cards/roda';
import Caplja from './cards/caplja';
import Guska from './cards/guska';

class Ptice extends Component {
  render() {
    return (
      <div className="container-fluid full">
        <div className="main_ostale">
          <p>Ptice Fruške gore</p>
        </div>
        <div className="top-txt">
          <p>
            U harmoniji sa bogatom florom Fruškogorja obitava zanimljivo carstvo
            životinja čija se populacija sastoji od velikog broja veoma retkih
            primeraka zaštićenih kao prirodna bogatstva Srbije.
          </p>
        </div>

        <div className="row row-kartice">
          <Orao />
          <Roda />
          <Caplja />
          <Guska />
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default Ptice;
