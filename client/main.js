import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.js';
import Ad from '../imports/ui/Ad.js'

Meteor.startup(() => {
  render(<App />, document.getElementById('render-app'));
});

//render(<Ad />, document.getElementById('render-ads'));



