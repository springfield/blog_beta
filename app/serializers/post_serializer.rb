class PostSerializer < ActiveModel::Serializer
	attributes :id, :title, :description, :author

	def author
		object.user.nickname
	end
end
