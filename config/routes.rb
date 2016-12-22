Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "battlehome(/*all)" => "github_battle#index", as: :react_router
end
