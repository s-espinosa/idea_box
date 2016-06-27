Rails.application.routes.draw do
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :ideas, only: [:index, :show, :create, :delete, :update]
    end
  end
end
