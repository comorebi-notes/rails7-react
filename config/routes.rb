Rails.application.routes.draw do
  root 'top#index'
  resource :search, only: :show
end
