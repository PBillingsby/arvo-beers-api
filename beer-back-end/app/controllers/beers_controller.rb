class BeersController < ApplicationController
  def create
    beer = Beer.create(beers_params)
    render json: beer
  end

  def show
  end

  def index
    beers = Beer.all
    render json: beers
  end

  def beers_params
    params.require(:beer).permit(:brewery_name, :name, :beer_type, :abv)
  end
end
