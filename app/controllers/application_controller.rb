class ApplicationController < ActionController::Base
    Rack::MiniProfiler.config.position = 'bottom-right'
    Rack::MiniProfiler.config.start_hidden = true
end
