Rails.application.routes.draw do
  # resources :beers, only: [:create, :show, :index]
  scope '/api/v1' do
    resources :beers, only: [:create, :show, :index, :update, :destroy]
  end
  get 'api/v1/facts', to: 'facts#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
