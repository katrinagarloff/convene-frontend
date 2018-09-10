class LocationsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    render json: @user.locations
  end

  def create
    @location = location.create(location_params)
  end

  private
  def location_params
    params.require(:location).permit(:name, :lon, :lat, :user_id)
  end
end
