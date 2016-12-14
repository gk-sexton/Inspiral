class Api::CollectionsController < ApplicationController
  def create
    @collection = Collection.new(collection_params)
    if @collection.save
      render "api/collections/show"
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def update
    @collection = Collection.find(params[:id])
    if @collection.update(title: collection_params[:title])
      render "api/collections/show"
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def show
    @collection = Collection.find(params[:id])
  end

  def index
    @collections = current_user.collections
  end

  def destroy
    @collection = Collection.find(params[:id])
    if @collection.destroy
      @collections = current_user.collections
      render :index
    else
      render json: @collection.errors.full_messages, status: 404
    end
  end

  private

  def collection_params
    params.require(:collection).permit(:title, :user_id)
  end
end
