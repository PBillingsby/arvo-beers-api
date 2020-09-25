require 'httparty'

class Beer < ApplicationRecord
  include HTTParty
  include Rails.application.routes.url_helpers
  has_one_attached :avatar
  before_create :scrape_information


  def scrape_information
    unparsed_url = HTTParty.get('https://www.ratebeer.com/search?q=victoria+bitter&tab=beer')
    doc = Nokogiri::HTML(unparsed_url)
  end

  def avatar_url
    [url_for(self.avatar), self.id] if self.avatar.attached?
  end
end
