class UsersController < ApplicationController
  def show
    @user = render json: User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
    render json: @user
    else
      render json: { errors: @user.errors.full_messages }
    end
  end

  def index
    @user = User.find(params[:id])
    render json: @user.locations
  end

  def login
    @user = User.find_by(user_name: user_params[:user_name])
    if @user && @user.validate(user_params[:password])
      render json: @user, include: [:locations]
    else
      render json: {error: "wrong username or password"}
    end
  end

  # find_by username and then .validate(pw string)
  private
  def user_params
    params.require(:user).permit(:name, :user_name, :password)
  end
end
