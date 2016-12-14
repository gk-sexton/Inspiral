class Api::SubscriptionsController < ApplicationController
  def create
    @subscription = Subscription.new(subscription_params)
    if @subscription.save
      render "api/subscriptions/show"
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def update
    @subscription = Subscription.find(params[:id])
    if @subscription.update()
      render "api/subscriptions/show"
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def show
    @subscription = current_user.subscriptions.find(params[:id])
  end

  def index
    @subscriptions = current_user.subscriptions
  end

  def destroy
    @subscription = current_user.subscriptions.find(params[:id])
    if @subscription.destroy
      @subscriptions = current_user.subscriptions
      render :index #TODO check rendering info
    else
      render json: @subscription.errors.full_messages, status: 404
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit() #TODO add needed keys
  end
end
