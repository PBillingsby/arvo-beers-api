class BeersController < ApplicationController
  def create
    beer = Beer.create(beer_params)
    render json: beer
  end

  def show
  end

  def index
    beers = Beer.all
    render json: beers, methods: [:avatar_url]
  end

  # def update
  #   beer = Beer.find_by(id: params[:id])
  #   beer.avatar.attach(params[:avatar])
  #   render json: beer
  # end

  def destroy
    beer = Beer.find_by(id: params[:id])
    beer.destroy
  end

  def beer_params
    params.permit(:id, :name, :brewery_name, :country, :beer_type, :abv, :rating, :notes, :avatar)
  end

end
