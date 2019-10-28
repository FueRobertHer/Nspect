class Api::FavoritesController < ApplicationController
  def index
    @favorites = Favorite.all
    render :index
  end

  def show
    @favorite = Favorite.find(params[:id])
    render :show
  end

  def create
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      render :show
    else
      render json: @observation.errors.full_messages, status: 422
    end
  end

  def update
    @favorite = Favorite.find(params[:favorite][:id])
    if @favorite.user_id == current_user.id
      if @favorite.update(favorite_params)
        render :show
      else
        render json: @favorite.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    if @favorite.user_id == current_user.id
      @favorite.destroy
      render :show
    else
      render json: ['did not delete favorite']
    end
  end


  private

  def favorite_params
    params.require(:favorite).permit(:id, :observation_id, :user_id)
  end
end
