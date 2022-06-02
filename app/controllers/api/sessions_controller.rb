module Api
  class SessionsController < ApplicationController
    def create
      @user = User.find_by(email: params[:user][:email])

      if @user and BCrypt::Password.new(@user.password) == params[:user][:password]
        session = @user.sessions.create
        cookies.permanent.signed[:supereats_session_token] = {
          value: session.token,
          httponly: true
        }
        render 'api/sessions/create', status: :created
      else
        render json: { success: false }, status: :bad_request
      end
    end

    
  end
end
