import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SightEdit from '../SightEdit'

Enzyme.configure({ adapter: new Adapter()})

describe('When SightEdit renders', () => {
    const mockSight = {
        name: "Taco Bell",
        address1: "Bell Street",
        city: "Taco",
        zip_code: "11111",
        state: "Jamaica Land",
        country: "Jamaica",
        phone: "222-222-2222",
        trip_id: 1
    }

    it('displays a heading', () => {
        const renderedSightEdit = shallow(<SightEdit sight= { mockSight } />)
        const renderedSightEditHeader = renderedSightEdit.find("h1")
        expect(renderedSightEditHeader.text()).toEqual("Sight Edit Page")       
    })
})