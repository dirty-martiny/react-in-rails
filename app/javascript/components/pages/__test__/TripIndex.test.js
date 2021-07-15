import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TripIndex from '../TripIndex'

Enzyme.configure({ adapter: new Adapter()})

describe('When TripIndex renders', () => {
    const mockTrip = {
        id: 1,
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
      
      const renderedTripIndex = shallow(<TripIndex trip= { mockTrip }/>);

    it('displays a heading', () => {
        const renderedTripIndexHeader = renderedTripIndex.find("h1")
        expect(renderedTripIndexHeader.text()).toEqual("TripIndex")       
    })

    it('displays a trip name', () => {
        const tripIndexCard = renderedTripIndex.find('h5');
        // expect(tripIndexCard.length).toEqual(1);

        expect(tripIndexCard.text()).toEqual("Getting some sun");
    })
})