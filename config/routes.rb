Rails.application.routes.draw do
  root 'top#index'

  resources :audios, only: :show
  resource :search, only: :show
  get 'search/*path', to: 'searches#show'

  namespace :api do
    namespace :v1 do
      resources :instruments, only: %i[index show]
      resources :genres, only: %i[index show]
      resources :audios, only: :show
    end
  end
end
