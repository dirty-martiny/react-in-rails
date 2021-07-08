# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create email: "test@test.com", password: "123123", password_confirmation: "123123"
user2 = User.create email: "email@email.com", password: "123123", password_confirmation: "123123"

# trips
# t.string "trip_name"
# t.string "trip_location"
# t.string "trip_date_range"
# t.boolean "is_public"
# t.integer "user_id"
trips =[
    {
        trip_name: "Getting some sun",
        trip_location: "Jamaica",
        trip_date_range: "12/20/2021 - 1/5/2022",
        is_public: false,
        user_id: user.id
    },
    {
        trip_name: "A lot eating",
        trip_location: "Italy",
        trip_date_range: "2/15/2022 - 2/20/2022",
        is_public: true,
        user_id: user.id
    },
    {
        trip_name: "Pasta Land",
        trip_location: "Italy",
        trip_date_range: "6/10/2022 - 6/20/2022",
        is_public: true,
        user_id: user2.id
    },
    {
        trip_name: "A lot eating",
        trip_location: "Italy",
        trip_date_range: "2/15/2022 - 2/20/2022",
        is_public: false,
        user_id: user2.id
    }
]

trips.each do |attributes|
  Trip.create attributes
  puts "creating trips #{attributes}"
end

trip1 = Trip.where(user_id: user.id)
trip2 = Trip.where(user_id: user2.id)

# sights
# t.string "name"
# t.string "address1"
# t.string "city"
# t.string "zip_code"
# t.string "state"
# t.string "country"
# t.string "phone"
# t.integer "trip_id" - trip1.id

sights = [
    {
        name: "Taco Bell",
        address1: "Bell Street",
        city: "Taco",
        zip_code: "11111",
        state: "Jamaica Land",
        country: "Jamaica",
        phone: "222-222-2222",
        trip_id: trip1.id
    },
    {
        name: "Eating Great",
        address1: "Eating Street",
        city: "Oxtail City",
        zip_code: "44444",
        state: "Jamaica Land",
        country: "Jamaica",
        phone: "333-333-3333",
        trip_id: trip1.id
    },
    {
        name: "Taco Bell",
        address1: "Bell Street",
        city: "Taco",
        zip_code: "11111",
        state: "Jamaica Land",
        country: "Jamaica",
        phone: "222-222-2222",
        trip_id: trip2.id
    },
    {
        name: "Eating Great",
        address1: "Eating Street",
        city: "Oxtail City",
        zip_code: "44444",
        state: "Jamaica Land",
        country: "Jamaica",
        phone: "333-333-3333",
        trip_id: trip2.id
    }
]

sights.each do |attributes|
  Sight.create attributes
  puts "creating sights #{attributes}"
end