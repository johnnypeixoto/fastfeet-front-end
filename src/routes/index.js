import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '../pages/SingIn';

import Deliveries from '../pages/Deliveries';
import Deliverymans from '../pages/Deliverymans';
import Problems from '../pages/Problems';
import Recipients from '../pages/Recipients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/encomendas" exact component={Deliveries} isPrivate />
      <Route path="/entregadores" exact component={Deliverymans} isPrivate />
      <Route path="/destinatarios" exact component={Recipients} isPrivate />
      <Route path="/problemas" exact component={Problems} isPrivate />
    </Switch>
  );
}
