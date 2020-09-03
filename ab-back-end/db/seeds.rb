# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Beer.create(brewery_name: "Carlton & United", country: "Australia", name: "Victoria Bitter", beer_type: "Lager", abv: 4.9)
Beer.create(brewery_name: "Carlton & United", country: "Australia", name: "Resches Pilsner", beer_type: "Pilsner", abv: 4.4)
Beer.create(brewery_name: "Carlton & United", country: "Australia", name: "Melbourne Bitter", beer_type: "Lager", abv: 4.6)


# t.string "brewery_name"
# t.string "country"
# t.string "name"
# t.string "beer_type"
# t.float "abv"
