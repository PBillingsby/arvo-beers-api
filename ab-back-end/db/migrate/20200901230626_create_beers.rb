class CreateBeers < ActiveRecord::Migration[6.0]
  def change
    create_table :beers do |t|
      t.string :brewery_name
      t.string :country
      t.string :name
      t.string :beer_type
      t.float :abv
      t.integer :rating
      t.text :notes
      t.timestamps
    end
  end
end
