class QueriesController < ApplicationController
  def create
    @query = Query.new(term: params[:term])
    render json: @query
  end

  def index
    render json: {foo: 'bar'}
  end

  def query_params
    params.permit(:term)
  end
end
