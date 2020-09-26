class FactsController < ApplicationController
  def create
    Fact.create(fact_content: params[:fact_content])
  end

  def index
    facts = Fact.all
    debugger
    return json: facts
  end
end
