'use strict';

const request = require('supertest');
const app = require('../src/server');

(async () => {
  try {
    const res = await request(app).get('/health').expect(200);
    if (res.body && res.body.status === 'ok') {
      console.log('Integration test: OK');
      process.exit(0);
    } else {
      console.error('Integration test: unexpected response', res.body);
      process.exit(2);
    }
  } catch (err) {
    console.error('Integration test failed:', err);
    process.exit(1);
  }
})();
