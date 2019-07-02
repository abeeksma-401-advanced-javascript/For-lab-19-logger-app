'use strict';

const Q = require('@nmq/q/server');

const network = new Q();

network.subscribe('save', payload =>{
  console.log('Saved: ', payload);
});

network.subscribe('read', payload => {
  console.log('read: ', payload);
});

