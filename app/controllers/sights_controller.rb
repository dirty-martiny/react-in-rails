class SightsController < ApplicationController
    
    def create
      sight = Sight.create(sight_params)
      if sight.valid?
          render json: sight
      else
          render json: sight.errors, status: :unprocessable_entity
      end
    end

    def update
      sight = Sight.find(params[:id])
      sight.update(sight_params)
      if sight.valid?
        render json: sight
      else
        render json: sight.errors, status: :unprocessable_entity
      end
    end 

    def destroy
      sight = Sight.find(params[:id])
      sight.destroy
      if sight.valid?
        render json: sight
      else
        render json: sight.errors, status: :unprocessable_entity
      end
    end
    
    private
    def sight_params
        params.require(:sight).permit(:name, :address1, :city, :zip_code, :state, :country, :phone, :trip_id)
    end
end
