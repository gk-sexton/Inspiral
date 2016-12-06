class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user])
    if @user
      login(@user)
      render json: @user
    else
      render json: ['Invalid username and/or password'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: "logged out"
    else
      render json: ["Logout unavailable"], status: 404
    end
  end
end
