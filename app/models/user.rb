class User < ActiveRecord::Base
  def self.find_or_create_from_auth_hash(auth_hash)
    user = User.find_by_uid(auth_hash["uid"])
    if user.present?
      return user
    else
      user = create do |user|
        user.provider = auth_hash["provider"]
        user.uid = auth_hash["uid"]
        user.name = auth_hash["info"]["name"]
        user.nickname = auth_hash["info"]["nickname"]
        user.image = auth_hash["info"]["image"]
      end
      puts user.inspect
      return user
    end
  end
end
