class Api::CommentsController < ApplicationController

  def index
    comments = obs_id ? Comment.in_observation(obs_id) : Comment.all
    @comments = comments
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @observation.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:comment][:id])
    if @comment.commenter_id == current_user.id
      if @comment.update(comment_params)
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.commenter_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ['did not delete comment']
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:id, :observation_id, :commenter_id, :body, :obsId)
  end

  def obs_id
    params[:obsId]
  end
end
