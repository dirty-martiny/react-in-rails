class TripsController < ApplicationController
    def index 
        trips = Trip.all
        render :json => trips.to_json(include: :sights)
    end
    
    def create
        trip = Trip.create(trip_params)
      if trip.valid?
        render json: trip
      else
        render json: trip.errors, status: :unprocessable_entity
      end
    end
    def update
        trip = Trip.find(params[:id])
        trip.update(trip_params)
      if trip.valid?
        render json: trip
      else
        render json: trip.errors, status: unprocessable_entity
      end
    end
  
      private
  
    def trip_params
      params.require(:trip).permit(:trip_name, :trip_location, :trip_date_range, :is_public, :user_id)
    end
  end
