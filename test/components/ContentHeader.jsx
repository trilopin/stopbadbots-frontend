import {
  React,
  sinon,
  assert,
  expect,
  TestUtils
} from '../test_helper';

import ContentHeader from '../../src/components/ContentHeader';


describe('ContentHeader component', () => {
  let data = {
    title: 'My Title',
    subtitle: 'My subtitle',
  }

  var sandbox, contentheader;

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    contentheader = TestUtils.renderIntoDocument(<ContentHeader {...data} />)
    h1 = TestUtils.scryRenderedDOMComponentsWithTag(contentheader, 'h1')
  });

  afterEach(() => {
    sandbox.restore()
  });


  it('should generate a h1 tag', () => {
    expect(h1.length).to.equal(1);
  });
});