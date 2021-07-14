import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TripIndex from '../TripIndex'

Enzyme.configure({ adapter: new Adapter()})

describe('When TripIndex renders', () => {
    const mockTrip = {
        trip_name: "Getting some sun",
        trip_location: "Jamaica",
        trip_date_range: "12/20/2021 - 1/5/2022",
        is_public: false,
        user_id: 1,
        sights: [
          {
            name: "Taco Bell",
            address1: "Bell Street",
            city: "Taco",
            zip_code: "11111",
            state: "Jamaica Land",
            country: "Jamaica",
            phone: "222-222-2222",
            trip_id: 1,
          },
        ],
      };

    it('displays a heading', () => {
        const renderedTripIndex = shallow(<TripIndex trip= { mockTrip } />)
        const renderedTripIndexHeader = renderedTripIndex.find("h1")
        expect(renderedTripIndexHeader.text()).toEqual("TripIndex")       
    })

    it('displays a trip_name', () => {
        const renderedTripIndex = shallow(<TripIndex trip= { mockTrip }/>);
        const renderedTripIndexCard = renderedTripIndex.find('CardTitle');
        expect(renderedTripIndexCard.length).toEqual(1);
        expect(renderedTripIndexCard.text()).toEqual("Getting some sun");
    })
})