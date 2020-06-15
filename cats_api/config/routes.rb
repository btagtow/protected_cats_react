Rails.application.routes.draw do
  resources :cats
  resources :users, only: [:index, :show, :create] do
    resources :cats
  end

  post "login", to: "authentication#login"
end
