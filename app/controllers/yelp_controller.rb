require "json"
require "optparse" 
require 'rest-client'
class YelpController < ApplicationController
    def search  
        rest_item = params[:item]  
        rest_location = params[:location]  
        response = RestClient::Request.execute(
            method: "GET",
            url: "https://api.yelp.com/v3/businesses/search?term=#{rest_item}&location=#{rest_location}",  
            headers: { Authorization: "Bearer #{ENV["YELP_API"]}" }  
            )    
        results = JSON.parse(response)    
        render json: results  
    end
end
