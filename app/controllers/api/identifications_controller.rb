class Api::IdentificationsController < ApplicationController

  def index
    identifications = obs_id ? Identification.in_observation(obs_id) : Identification.all
    @identifications = identifications
    render :index
  end

  def show
    @identification = Identification.find(params[:id])
    render :show
  end

  def create
    @identification = Identification.new(id_params)
    if @identification.save
      render :show
    else
      render json: @observation.errors.full_messages, status: 422
    end
  end

  def update
    @identification = Identification.find(params[:identification][:id])
    if @identification.identifier_id == current_user.id
      if @identification.update(id_params)
        render :show
      else
        render json: @identification.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @identification = Identification.find(params[:id])
    if @identification.identifier_id == current_user.id
      @identification.destroy
      render :show
    else
      render json: ['did not delete identification']
    end
  end


  private

  def id_params
    params.require(:identification).permit(:id, :observation_id, :identifier_id, :guess, :body, :obsId)
  end

  def obs_id
    params[:obsId]
  end
end
