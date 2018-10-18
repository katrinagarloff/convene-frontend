

class QueriesController < ApplicationController
  def create
    base_url = "https://api.meetup.com/find/upcoming_events?key=#{THE_KEY}&"
    # lat=40.700518&lon=-73.929678&radius=5&page=20
    # lat: params[:term][:lat], lon: params[:term][:lon]
    @query = Query.new(lat: params[:term][:lat], lon: params[:term][:lon])
    @query.response
    render json: @query
  end

  def query_params
    params.permit(:term)
  end
end
