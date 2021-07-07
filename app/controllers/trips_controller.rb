class TripsController < ApplicationController
     def create
        trip = Trip.create(trip_params)
        if trip.valid?
        render json: trip
        else
      render json: trip.errors, status: :unprocessable_entity
    end
  end
private
  
  def trip_params
    params.require(:trip).permit(:trip_name, :trip_location, :trip_date_range, :is_public, :user_id)
  end
end
