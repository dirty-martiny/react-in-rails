import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../../components/Header";


Enzyme.configure({ adapter: new Adapter() });

describe('When Header loads', () => {
    it('displays navlink when signed in',() => {
        const header = shallow(<Header logged_in={true}
            new_user_route="new_user_route"
            sign_in_route="sign_in_route"
            sign_out_route="sign_out_route"/>);
        const nav = header.find('NavLink');
        expect(nav.length).toEqual(1);
    })

    it('displays navitem when signed in', () => {
        const header = shallow(<Header logged_in={ true}
            new_user_route="new_user_route"
            sign_in_route="sign_in_route"
            sign_out_route="sign_out_route"/>);
        const nav = header.find('NavItem');
        expect(nav.length).toEqual(5);
        
        let navLinks = ['Home', 'Your Trips', 'New Trip', 'About Us', 'Sign Out']
        navLinks.map((text) => {
            const element = nav.findWhere((node) => node.text( ) === text)
            expect(element.exists()).toEqual(true)
        })
    })
  })