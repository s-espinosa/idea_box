class Api::V1::IdeasController < Api::ApiController
  def index
    respond_with Idea.all
  end

  def create
    @idea = Idea.new(idea_params)
    if @idea.save
      respond_with(:api, :v1, @idea)
    end
  end

  def destroy
    @idea = Idea.find(params[:id])
    if @idea.delete
      respond_with(:api, :v1, @idea, :location => nil)
    end
  end

  private
  def idea_params
    params.permit(:title, :body, :quality)
  end
end
