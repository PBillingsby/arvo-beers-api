class BeersController < ApplicationController
  def create
    beer = Beer.create(beer_params)
    render json: beer
  end

  def show
  end

  def index
    beers = Beer.all
    render json: beers
  end

  def destroy
    beer = Beer.find_by(id: params[:id])
    beer.destroy
  end

  def beer_params
    params.require(:beer).permit(:name, :brewery_name, :country, :beer_type, :abv)
  end
end
