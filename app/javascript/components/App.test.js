// import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter()})

describe('When App renders', () => {
    const mockFetch = jest.fn()
    const mockJson = jest.fn()
    beforeAll(() => {
        global.fetch = mockFetch
        mockFetch.mockResolvedValue({json: mockJson})
        mockJson.mockResolvedValue([])
    })
  it('displays a Header and a Footer', () => {
  const renderedApp = shallow(<App/>)
  const renderedHeader = renderedApp.find('Header') 
  const renderedFooter = renderedApp.find('Footer') 
  expect(renderedHeader.length).toEqual(1)
  expect(renderedFooter.length).toEqual(1)
  })
})