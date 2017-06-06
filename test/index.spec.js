import expect from 'expect.js';
import { app, validators } from '../src/index';

describe('Array', () => {
  it('init function exists', () => {
    expect(app).to.be.a('function');
  });

  it('validators function exists', () => {
    expect(validators).to.be.a('function');
  });
});
