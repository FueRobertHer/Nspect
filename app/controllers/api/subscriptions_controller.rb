class Api::SubscriptionsController < ApplicationController
  def index
    @subscriptions = Subscription.all
    render :index
  end

  def show
    @subsctiption = Subscription.find(params[:id])
    render :show
  end

  def create
    @subsctiption = Subscription.new(subsctiption_params)
    if @subsctiption.save
      render :show
    else
      render json: @observation.errors.full_messages, status: 422
    end
  end

  def update
    @subsctiption = Subscription.find(params[:subsctiption][:id])
    if @subsctiption.subscriber_id == current_user.id
      if @subsctiption.update(subsctiption_params)
        render :show
      else
        render json: @subsctiption.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @subsctiption = Subscription.find(params[:id])
    if @subsctiption.subscriber_id == current_user.id
      @subsctiption.destroy
      render :show
    else
      render json: ['did not delete subsctiption']
    end
  end


  private

  def subscriber_params
    params.require(:subsctiption).permit(:id, :other_user_id, :subscriber_id)
  end
end
