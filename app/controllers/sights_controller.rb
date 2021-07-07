class SightsController < ApplicationController
    def index 
        sights = Sight.all
        render json: sights
    end
end
