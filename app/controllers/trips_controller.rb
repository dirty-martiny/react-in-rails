class TripsController < ApplicationController

  # user is NOT logged in
    # remove/filter out private trips
    #  user_signed_in? -> from devise
  # user IS logged in
    # Dash
      # only public
    # your trips
      # specific current user's publics and privates
    def index 
        trips = Trip.all
        render :json => trips.to_json(include: :sights)
    end
    # def index 
    #     trips = Trip.all
    #     if user_signed_in? and current_user
    #       render :json => trips.to_json(include: :sights)
    #     end
    #     render :json => trips.to_json(include: :sights)
    # end
    
     def create
        trip = Trip.create(trip_params)
        if trip.valid?
        render json: trip
        else
      render json: trip.errors, status: :unprocessable_entity
      end
    end

    def destroy
      trip = Trip.find(params[:id])
      sights = Sight.where({trip_id: trip.id})
      
      sights.each do |sight|
        sight.destroy
      end
      
      trip.destroy
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
