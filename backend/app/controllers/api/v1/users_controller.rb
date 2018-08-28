module Api
  module V1
    class UsersController < ApplicationController
      def show
        @user = render json: User.find(params[:id])
      end
    end
  end
end
