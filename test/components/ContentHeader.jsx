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

  let sandbox, contentheader, h1, small, section;

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    contentheader = TestUtils.renderIntoDocument(<ContentHeader {...data} />)
    h1 = TestUtils.findRenderedDOMComponentWithTag(contentheader, 'h1')
    small = TestUtils.findRenderedDOMComponentWithTag(contentheader, 'small')
    section = TestUtils.findRenderedDOMComponentWithTag(contentheader, 'section')
  });

  afterEach(() => {
    sandbox.restore()
  });


  it('should have a section container', () => {
    expect(section).to.not.equal(null)
    expect(section.className).to.equal('content-header')
    expect(section.childNodes.length).to.equal(2)
    expect(section.childNodes[0].tagName).to.equal('H1')
    expect(section.childNodes[1].tagName).to.equal('OL')
  });

  it('should generate a small tag with subtitle into h1', () => {
    expect(small).to.not.equal(null)
    expect(small.innerHTML).to.equal(data['subtitle'])
  });

  it('should generate a h1 tag', () => {
    expect(h1).to.not.equal(null)
    expect(h1.childNodes[0].innerHTML).to.be.equal(data['title'])
  });

});