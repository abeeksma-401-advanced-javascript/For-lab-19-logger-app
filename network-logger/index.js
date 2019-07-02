'use strict';

const Q = require('@nmq/q/client');

const network = new Q('network');

network.subscribe('file-altered', payload => {
  console.log('file-altered: ', payload);
});

