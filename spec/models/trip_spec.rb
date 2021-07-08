require 'rails_helper'

RSpec.describe Trip, type: :model do
 let(:user) {User.create email: 'vivi@gmail.com', password: '123456', password_confirmation: '123456'}
  it"should have a trip_name" do
    trip = Trip.create(
      # trip_name: "Getting some sun",
        trip_location: "Jamaica",
        trip_date_range: "12/20/2021 - 1/5/2022",
        is_public: false,
        user_id: user.id
    ) 
    expect(trip.errors[:trip_name]).to_not be_empty
    end
  it"should have a trip_location" do
    trip = Trip.create(
      trip_name: "Getting some sun",
        # trip_location: "Jamaica",
        trip_date_range: "12/20/2021 - 1/5/2022",
        is_public: false,
        user_id: user.id
    ) 
    expect(trip.errors[:trip_location]).to_not be_empty
    end
  it"should have a trip_date_range" do
    trip = Trip.create(
      trip_name: "Getting some sun",
        trip_location: "Jamaica",
        # trip_date_range: "12/20/2021 - 1/5/2022",
        is_public: false,
        user_id: user.id
    ) 
    expect(trip.errors[:trip_date_range]).to_not be_empty
    end
  it"should have a user_id" do
    trip = Trip.create(
      trip_name: "Getting some sun",
        trip_location: "Jamaica",
        trip_date_range: "12/20/2021 - 1/5/2022",
        is_public: false,
        # user_id: user.id
    ) 
    expect(trip.errors[:user_id]).to_not be_empty
    end
end
