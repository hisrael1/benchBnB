class StaticPagesController < ApplicationController
  def root
  end
end

# When the route/ url that calls root is called, it's going to render
# root.html.erb
# It can automatically find files even if it's in folders?
# As long as the folders correspond with the controller name