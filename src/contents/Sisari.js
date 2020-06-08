import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Macka from '../contents/cards/macka'
import Jelen from '../contents/cards/jelen'
import Tvor from '../contents/cards/tvor'
import Vidra from '../contents/cards/vidra'

class Sisari extends Component {
  render (){
    return (
    <div className="container-fluid full">
          <div className="main_ostale">
        <p>Sisari na Fruškoj gori</p>
    </div>
    <div className="top-txt">
        <p>U harmoniji sa bogatom florom Fruškogorja obitava zanimljivo carstvo životinja čija se populacija sastoji
            od velikog broja veoma retkih primeraka zaštićenih kao prirodna bogatstva Srbije.</p>
    </div>

      <div className="row">
      <Macka />
      <Jelen />
      <Tvor />
      <Vidra />
    </div>
      </div>
  );
}
};


export default Sisari;