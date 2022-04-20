Rails.application.routes.draw do
  
  #Do I need to write nested 
  # Everything can be nested? What is namespace?
  # Why is resource and resources singular
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create]
  end
  
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  #When / is called and nothing else, this route to the static pages controller
  #which will render the root.html.erb which will render react. 
  # I should try to understand this better

end
