
class Beer < ApplicationRecord
  include Rails.application.routes.url_helpers
  has_one_attached :avatar

  def avatar_url
    [url_for(self.avatar), self.id] if self.avatar.attached?
  end
end
