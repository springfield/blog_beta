require "rails_helper"

RSpec.describe Api::PostsController, type: :controller do
	before do
		@user = User.new email: 'abc@abc.com', password: '12345678', nickname: 'user'
  	allow(controller).to receive(:current_user).and_return(@user)
	end

	describe 'POST #create' do
		it 'creates new post' do
			post :create, post: {title: 'Title', description: 'Description'}
			expect(Post.all.first.title).to eql('Title')
			expect(response.body).to eql({success: true}.to_json)
		end
	end

	describe 'GET #index' do
		before do
			allow(controller).to receive(:current_user).and_return(@user)
			post = Post.new title: 'Title', description: 'Description', user: @user
			post.save
			@hash = PostSerializer.new(post).serializable_hash
		end

		it 'returns json array' do
			get :index
			expect(response.body).to eql([@hash].to_json)
		end
	end
end
