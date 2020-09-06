require 'google_search'

class Beer < ApplicationRecord
  # include HTTParty
  before_save :scrape_url

  def scrape_url
    byebug
    
    query = (self.name + " " + self.brewery_name).downcase.split(" ").join("-")
    search = GoogleSearch.new(q: query, serp_api_key: "secret_api_key")


  end
end
