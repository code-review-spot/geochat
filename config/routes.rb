Geochat::Application.routes.draw do
  resources :channels

  resources :messages
  resources :locations

  get "home/index"

  match '/auth/:provider/callback', to: 'sessions#create'
  match '/pusher/auth' => 'pusher#auth'
  match '/signout' => 'sessions#destroy', :as => :signout

  root :to => 'home#index'
end
