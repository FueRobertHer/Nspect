class Api::IdentificationsController < ApplicationController

  def index
    @identifications = Identification.all
    render :index
  end

  def show
    @identification = Identification.find(params[:id])
    render :show
  end

  def create
    @identification = Identification.new(identification_params)
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
    params.require(:comment).permit(:id, :observation_id, :identifier_id, :guess, :body)
  end
end
