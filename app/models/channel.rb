class Channel < ActiveRecord::Base
  validates :name, :uniqueness => true, :presence => true
  belongs_to :user
end
