class PagesController < ApplicationController
  def home
    @post_feed = Post.all.order(created_at: :desc)
  end
end
