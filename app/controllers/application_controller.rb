class ApplicationController < ActionController::Base
    Rack::MiniProfiler.config.position = 'bottom-right'
    Rack::MiniProfiler.config.start_hidden = true
    skip_before_action :verify_authenticity_token

end
