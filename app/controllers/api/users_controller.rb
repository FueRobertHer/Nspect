class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  # def new
  #   @user = User.new
  #   render :new
  # end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def edit
  #   @user = User.find(params[:id])
  #   if @user.id == current_user.id
  #     render :edit
  #   else
  #     render json: ['Identity theft is a crime'], stattus:  401
  #   end
  # end

  def update
    @user = User.find(params[:id])
    if @user.id == current_user.id
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
      en
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:username, :password, :email, :description)
  end

end
