Rails.application.routes.draw do
      resources :users do
        resources :locations
      end

  post '/login', to: 'users#login'
      # only: [:show, :index, :create]
      resources :queries, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
