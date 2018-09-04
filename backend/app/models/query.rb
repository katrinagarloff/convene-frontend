require 'httparty'

class Query
  attr_accessor :lat, :lon, :response
  def initialize(lat:, lon:)
    @lat = lat
    @lon = lon
  end

  def url
    "https://api.meetup.com/find/events?key=#{THE_KEY}&lat=#{self.lat}&lon=#{self.lon}&radius=1&page=1"
  end

  def fetch_data
    resp = HTTParty.get(self.url)
    self.response = resp.parsed_response
  end

  def response
    @response || self.fetch_data
  end
end
