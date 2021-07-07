require 'rails_helper'

# create_table "sights", force: :cascade do |t|
#   t.string "name"
#   t.string "address1"
#   t.string "city"
#   t.string "zip_code"
#   t.string "state"
#   t.string "country"
#   t.string "phone"
#   t.integer "trip_id"

        # name: "Taco Bell",
        # address1: "Bell Street",
        # city: "Taco",
        # zip_code: "11111",
        # state: "Jamaica Land",
        # country: "Jamaica",
        # phone: "222-222-2222",
        # trip_id: trip1.id

RSpec.describe Sight, type: :model do
  let(:user) { User.create email: 'kevin@testing.com', password: 'testing123', 
  password_confirmation: 'testing123'}

  let(:trip1) { Trip.create trip_name: 'Getting some sun', trip_location: "Jamaica", trip_date_range: "12/20/2021 - 1/5/2022", is_public: false, user_id: user.id}


  it "should have a name" do
    sight = Sight.create(
      address1: "Bell Street",
      city: "Taco",
      zip_code: "11111",
      state: "Jamaica Land",
      country: "Jamaica",
      phone: "222-222-2222",
      trip_id: trip1.id)
      expect(sight.errors[:name]).to_not be_empty
  end
  it "should have a address1" do
    sight = Sight.create(
      name: "Taco Bell",
      city: "Taco",
      zip_code: "11111",
      state: "Jamaica Land",
      country: "Jamaica",
      phone: "222-222-2222",
      trip_id: trip1.id)
      expect(sight.errors[:address1]).to_not be_empty
  end
  it "should have a city" do
    sight = Sight.create(
      name: "Taco Bell",
      address1: "Bell Street",
      zip_code: "11111",
      state: "Jamaica Land",
      country: "Jamaica",
      phone: "222-222-2222",
      trip_id: trip1.id)
      expect(sight.errors[:city]).to_not be_empty
  end
  it "should have a zip_code" do
    sight = Sight.create(
      name: "Taco Bell",
      address1: "Bell Street",
      city: "Taco",
      state: "Jamaica Land",
      country: "Jamaica",
      phone: "222-222-2222",
      trip_id: trip1.id)
      expect(sight.errors[:zip_code]).to_not be_empty
  end
  it "should have a state" do
    sight = Sight.create(
      name: "Taco Bell",
      address1: "Bell Street",
      city: "Taco",
      zip_code: "11111",
      country: "Jamaica",
      phone: "222-222-2222",
      trip_id: trip1.id)
      expect(sight.errors[:state]).to_not be_empty
  end
  it "should have a country" do
    sight = Sight.create(
      name: "Taco Bell",
      address1: "Bell Street",
      city: "Taco",
      zip_code: "11111",
      state: "Jamaica Land",
      phone: "222-222-2222",
      trip_id: trip1.id)
      expect(sight.errors[:country]).to_not be_empty
  end
  it "should have a phone" do
    sight = Sight.create(
      name: "Taco Bell",
      address1: "Bell Street",
      city: "Taco",
      zip_code: "11111",
      state: "Jamaica Land",
      country: "Jamaica",
      trip_id: trip1.id)
      expect(sight.errors[:phone]).to_not be_empty
  end
  it "should have a trip" do
    sight = Sight.create(
      name: "Taco Bell",
      address1: "Bell Street",
      city: "Taco",
      zip_code: "11111",
      state: "Jamaica Land",
      country: "Jamaica",
      phone: "222-222-2222")
      expect(sight.errors[:trip_id]).to_not be_empty
  end
end
