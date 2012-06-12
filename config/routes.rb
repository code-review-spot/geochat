Geochat::Application.routes.draw do
  # channels
  resources :channels

  # messages
  post '/messages' => 'messages#create'

  # locations
  get '/locations/:channel' => 'locations#show'
  post '/locations' => 'locations#create'

  # authentication
  match '/auth/:provider/callback', to: 'sessions#create'
  match '/pusher/auth' => 'pusher#auth'
  match '/signout' => 'sessions#destroy', :as => :signout

  # root
  root :to => 'home#index'

  # errors
  match '*a', to: 'errors#routing'
end
