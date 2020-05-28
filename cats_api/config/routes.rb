Rails.application.routes.draw do
  resources :cats
  resources :users, only: [:index, :show, :create]

  post "login", to: "authentication#login"
end
