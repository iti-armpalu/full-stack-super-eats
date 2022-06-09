module Api
  class DeliveryUsersController < ApplicationController
    def create
      @delivery_user = DeliveryUser.new(delivery_user_params)

      if @delivery_user.save
        render 'api/delivery_users/create', status: :created
      else
        render json: { success: false }, status: :bad_request
      end
    end

    private

    def delivery_user_params
      params.require(:delivery_user).permit(:first_name, :last_name, :email, :password, :phone_number)
    end
  end
end
