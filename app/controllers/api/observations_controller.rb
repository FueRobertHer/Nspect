class Api::ObservationsController < ApplicationController

  def index
    if bounds
      observations = Observation.in_bounds(bounds)
    elsif user_id
      observations = Observation.by_user(user_id)
    else
      observations = Observation.all
    end

    @observations = observations
    render :index
  end

  def show
    @observation = Observation.find(params[:id])
    render :show
  end

  def create
    @observation = Observation.new(obs_params)
    if @observation.save
      render :show
    else
      render json: @observation.errors.full_messages, status: 422
    end
  end

  def update
    @observation = Observation.find(params[:observation][:id])
    # if @observation.observer_id == current_user.id
      if @observation.update(obs_params)
        render :show
      else
        render json: @observation.errors.full_messages, status: 422
      end
    # end
  end

  def destroy
    @observation = Observation.find(params[:id])
    if @observation.observer_id == current_user.id
      @observation.destroy
      render :show
    else
      render json: ['did not delete observation']
    end
  end

  private

  def obs_params
    params.require(:observation).permit(:id, :observer_id, :lat, :lng, :description, :datetime, :top_identification, :image)
  end

  def bounds
    params[:bounds]
  end

  def user_id
    params[:userId]
  end

end
