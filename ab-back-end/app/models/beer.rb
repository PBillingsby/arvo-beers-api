
class Beer < ApplicationRecord
  include Rails.application.routes.url_helpers
  has_one_attached :avatar

  def image_url
    url_for(self.avatar)
  end
end
