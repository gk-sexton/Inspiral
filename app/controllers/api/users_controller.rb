class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      flash.now[:errors] = @user.errors
    end
  end

  def show
    render json: 'hello?'
  end

  def edit
    #possibly for managing collections/subscriptions?
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
