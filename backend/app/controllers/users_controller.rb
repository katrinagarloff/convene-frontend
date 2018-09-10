class UsersController < ApplicationController
  def show
    @user = render json: User.find(params[:id])
  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  def index
    @user = User.find(params[:id])
    render json: @user.locations
  end

  private
  def user_params
    params.require(:user).permit(:name, :user_name, :password)
  end
end
