class LocationsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    render json: @user.locations
  end

  def create
    @location = Location.create(location_params)
    render json: @location
  end

  private
  def location_params
    params.require(:location).permit(:name, :address, :lon, :lat, :user_id)
  end
end
