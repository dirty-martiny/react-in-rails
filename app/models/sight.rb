class Sight < ApplicationRecord
    belongs_to :trip
    validates :name, :address1, :city, 
    :zip_code, :state, :country, :phone, 
    :trip_id, presence: true
end


