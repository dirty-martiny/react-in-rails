require 'rails_helper'

RSpec.describe "Trips", type: :request do
    let(:user) do
      User.create email: 'sarah@test.com', password: '123456', password_confirmation: '123456'
    end
    # -----index-----
  describe "GET /index" do
    it 'get all the trips' do
      Trip.create trip_name: "I like the cold", trip_location: "Boston", trip_date_range: "12/1/2021 - 1/1/2022", is_public: false, user_id: user.id

      get '/trips'

      trips = JSON.parse(response.body)
      expect(trips.length).to eq 1
      expect(response).to have_http_status(200)

      trip = trips.first

      expect(trip['trip_name']).to eq 'I like the cold'
      expect(trip['trip_location']).to eq 'Boston'
      expect(trip['trip_date_range']).to eq '12/1/2021 - 1/1/2022'
      expect(trip['is_public']).to eq false
    end
  end
# -----create-----
# -----update-----
# -----delete-----
end
