class Trip < ApplicationRecord
    belongs_to :user
    has_many :sights
    validates :trip_name, :trip_location, :trip_date_range, :user_id, presence: true
end
