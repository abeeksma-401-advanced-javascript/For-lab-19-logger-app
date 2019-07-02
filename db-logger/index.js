'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');

db.subscribe('create', payload => {
  console.log(payload, ' was created');
});

db.subscribe('read', payload => {
  console.log(payload, 'has been read');
});

db.subscribe('update', payload => {
  console.log('Updated: ', payload);
});

db.subscribe('delete', payload => {
  console.log(payload, 'HAS BEEN DESTROYED! KILLED!! REMOVED FROM EXISTANCE!!!')
});

db.subscribe('auth', payload => {
  console.log(payload, 'signing in');
});