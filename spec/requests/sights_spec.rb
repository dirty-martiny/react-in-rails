require 'rails_helper'

RSpec.describe "Sights", type: :request do
    let(:user) { User.create email: 'kevin@testing.com', password: 'testing123', 
    password_confirmation: 'testing123'}

    let(:trip1) { Trip.create trip_name: 'Getting some sun', trip_location: "Jamaica", trip_date_range: "12/20/2021 - 1/5/2022", is_public: false, user_id: user.id}

    describe "POST /sights" do
      it 'creates a new sight' do
        sight_params = {
          sight: {
            name: "Taco Bell",
            address1: "Bell Street",
            city: "Taco",
            zip_code: "11111",
            state: "Jamaica Land",
            country: "Jamaica",
            phone: "222-222-2222",
            trip_id: trip1.id
          }
        }
        post '/sights', params: sight_params

        sight_response = JSON.parse(response.body)
        expect(sight_response['name']).to eq 'Taco Bell'
        expect(sight_response['address1']).to eq 'Bell Street'
        expect(sight_response['city']).to eq 'Taco'
      end
    end

      # -----update-----
      describe 'PUT /sight' do
    it 'edits a sight' do
      sight = Sight.create(
            name: "Taco Bell",
            address1: "Bell Street",
            city: "Taco",
            zip_code: "11111",
            state: "Jamaica Land",
            country: "Jamaica",
            phone: "222-222-2222",
            trip_id: trip1.id
        )

      update_sight_params = {
          sight: {
            name: "Taco Bell",
            address1: "Bell Street",
            city: "Taco",
            zip_code: "11111",
            state: "Jamaica Land",
            country: "Jamaica",
            phone: "222-222-2222",
            trip_id: trip1.id
          }
      }
      patch "/sights/#{sight.id}", params: update_sight_params

      updated_sight_response = JSON.parse(response.body)
      expect(updated_sight_response['name']).to eq 'Taco Bell'
      expect(updated_sight_response['address1']).to eq 'Bell Street'
      expect(updated_sight_response['city']).to eq 'Taco'
      expect(response).to have_http_status(200)
    end
  end


      # -----update-----
      describe 'PUT /sight' do
    it 'edits a sight' do
      sight = Sight.create(
            name: "Taco Bell",
            address1: "Bell Street",
            city: "Taco",
            zip_code: "11111",
            state: "Jamaica Land",
            country: "Jamaica",
            phone: "222-222-2222",
            trip_id: trip1.id
        )
      update_sight_params = {
        sight: {
            name: "Taco Bell",
            address1: "Bell Street",
            city: "Taco",
            zip_code: "11111",
            state: "Jamaica Land",
            country: "Jamaica",
            phone: "222-222-2222",
            trip_id: trip1.id
          }
      }
      patch "/sights/#{sight.id}", params: update_sight_params

      updated_sight_response = JSON.parse(response.body)
      expect(updated_sight_response['name']).to eq 'Taco Bell'
      expect(updated_sight_response['address1']).to eq 'Bell Street'
      expect(updated_sight_response['city']).to eq 'Taco'
      expect(response).to have_http_status(200)
      end
    end
    # delete sight
    describe 'DELETE /sight' do
    it 'deletes a sight' do
      sight_params = {
          sight: {
            name: "Taco Bell",
            address1: "Bell Street",
            city: "Taco",
            zip_code: "11111",
            state: "Jamaica Land",
            country: "Jamaica",
            phone: "222-222-2222",
            trip_id: trip1.id
          }
      }
      post '/sights', params: sight_params
      sight = Sight.first
      delete "/sights/#{sight.id}"
      sights = Sight.all

      expect(sights).to be_empty
      expect(response).to have_http_status(200)
    end
  end
end
