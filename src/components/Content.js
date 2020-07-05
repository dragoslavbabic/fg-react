import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Kontakt} from './../contents/Kontakt';
import Pocetna from './../contents/Pocetna';
import Ptice from './../contents/Ptice';
import Sisari from './../contents/Sisari';
import Biljke from './../contents/Biljke';
import Gljive from './../contents/Gljive';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pocetna} />
      <Route path="/ptice" component={Ptice} />
      <Route path="/sisari" component={Sisari} />
      <Route path="/biljke" component={Biljke} />
      <Route path="/gljive" component={Gljive} />
      <Route path="/kontakt" component={Kontakt} />
    </Switch>
  );
};

export default Content;
