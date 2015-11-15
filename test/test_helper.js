import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const { assert, expect } = chai

chai.should();
chai.use(sinonChai);

export {
  React,
  chai,
  sinon,
  sinonChai,
  assert,
  expect,
  TestUtils
}