Rails.application.routes.draw do
  resources :sights
  resources :trips
  devise_for :users
  post '/search', to: 'yelp#search'
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
