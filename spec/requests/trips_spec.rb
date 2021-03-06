require 'rails_helper'

RSpec.describe "Trips", type: :request do
    let(:user) do
      User.create email: 'test@test.com', password: '123123', password_confirmation: '123123'
    end

    let(:user2) do
      User.create email: 'email@email.com', password: '123123', password_confirmation: '123123'
    end
    # -----Read-----
  describe "GET /index" do
    it 'get all the trips' do
      Trip.create trip_name: "I like the cold", trip_location: "Boston", trip_date_range: "12/1/2021 - 1/1/2022", is_public: false, user_id: user.id
      Trip.create trip_name: "I like the heat", trip_location: "Miami", trip_date_range: "1/1/2022 - 1/10/2022", is_public: true, user_id: user.id

      Trip.create trip_name: "Pasta", trip_location: "italy", trip_date_range: "12/1/2021 - 1/1/2022", is_public: false, user_id: user2.id
      Trip.create trip_name: "The best fish", trip_location: "Jacmel", trip_date_range: "1/1/2022 - 1/10/2022", is_public: true, user_id: user2.id

      get '/trips'

      trips = JSON.parse(response.body)
      expect(response).to have_http_status(200)

      trip = trips.first

      expect(trip['trip_name']).to eq 'I like the heat'
    end
  end
  # -----create-----
  describe "POST /trips" do
    it 'creates a new trip' do
      trip_params = {
        trip: {
        trip_name: "I like the cold",
        trip_location: "Boston",
        trip_date_range: "12/1/2021 - 1/1/2022",
        is_public: false,
        user_id: user.id
        }
      }
      post '/trips', params: trip_params
      trip_response = JSON.parse(response.body)
     expect(trip_response['trip_name']).to eq 'I like the cold'
      expect(trip_response['trip_location']).to eq 'Boston'
      expect(trip_response['trip_date_range']).to eq '12/1/2021 - 1/1/2022'
      expect(trip_response['is_public']).to eq false
    end
  end
     #-----Update-----
     describe 'PUT /trips' do
      it 'edits a trip' do
        trip = Trip.create(
          trip_name: "Road trip",
          trip_location: "Jamaica",
          trip_date_range: "12/20/2021 - 1/5/2022",
          is_public: false,
          user_id: user.id
        )
        
        update_trip_params = {
          trip: {
            trip_name: "Road Trip",
            trip_location: "San Diego",
            trip_date_range: "12/20/2021 - 1/5/2022",
            is_public: false,
            user_id: user.id
          }
        }
        trip= Trip.first
        patch "/trips/#{trip.id}", params: update_trip_params

        updated_trip_response = JSON.parse(response.body)
        expect(updated_trip_response['trip_name']).to eq "Road Trip"
        expect(updated_trip_response['trip_location']).to eq "San Diego"
        expect(updated_trip_response['trip_date_range']).to eq "12/20/2021 - 1/5/2022"
        expect(response).to have_http_status(200)
      end
    end

    # delete trip
    describe 'DELETE /trips' do
    it 'deletes a trip' do
      trip_params = {
        trip: {
        trip_name: "I like the cold",
        trip_location: "Boston",
        trip_date_range: "12/1/2021 - 1/1/2022",
        is_public: false,
        user_id: user.id
      }
    }
      post '/trips', params: trip_params
      trip = Trip.first
      delete "/trips/#{trip.id}"
      trips = Trip.all

      expect(trips).to be_empty
      expect(response).to have_http_status(200)
    end
  end
end
