require 'clockwork'
require './config/boot'
require './config/environment'

module Clockwork
	handler do |job|
		if job.eql?('random_featured')
			Post.update_all("featured = false")
			post = Post.order("RANDOM()").first
			post.featured = true
			post.save
		end
	end

	every(1.minute, 'random_featured')
end
