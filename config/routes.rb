Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, except: [:edit, :destroy] do
      resources :subscriptions, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :messages, except: [:edit, :new]

    resources :channels, except: [:edit, :new] do
      resources :subscriptions, only: [:index]
    end

    resources :subscriptions, only: [:create, :destroy]

  end
end
