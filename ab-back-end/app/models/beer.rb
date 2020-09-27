require 'httparty'

class Beer < ApplicationRecord
  include HTTParty
  include Rails.application.routes.url_helpers
  has_one_attached :avatar
  before_create :has_image?


  def has_image? # Adds default beer image if no image attached
    if !self.avatar.attached?
      self.avatar.attach(io: File.open(Rails.root.join("public", "stock-beer.jpg")), filename: 'default.jpg' , content_type: "image/jpg")
    end
  end

  def avatar_url
    [url_for(self.avatar), self.id] if self.avatar.attached?
  end
end
