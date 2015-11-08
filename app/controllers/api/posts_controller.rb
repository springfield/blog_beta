class Api::PostsController < ApplicationController
	before_action :authenticate_user!, only: :create

	def index
		render json: Post.order(created_at: :desc)
	end

	def create
		post = Post.new post_params.merge({user: current_user})
		render json: {success: post.save}
	end

	private

	def post_params
		params.require(:post).permit(:title, :description)
	end
end
