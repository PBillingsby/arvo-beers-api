Rails.application.routes.draw do
  # resources :beers, only: [:create, :show, :index]
  scope '/api/v1' do
    resources :beers, only: [:create, :show, :index, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
