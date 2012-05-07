class Channel < ActiveRecord::Base
  validates :name, :uniqueness => true, :presence => true
end
