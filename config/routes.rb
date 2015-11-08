Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :create]
  end
end
