# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Plant.destroy_all
Pod.destroy_all

Plant.create(name: "Coyote Tomato", latin_name: "Lycopersicon pimpinellifolium", season: "Summer", light: "Full Sun", water: "1/day", germ_days: 14, notes: "Indeterminate tomato, yellow")
Plant.create(name: "Borage", latin_name: "Borago officinalis", season: "Spring", light: "Partial Sun", water: "1/day", germ_days: 7, notes: "Edible flower")
Plant.create(name: "Crystal Apple Cucumber", latin_name: "Cucumis sativus", season: "Summer", light: "Full Sun", water: "2/day", germ_days: 7, notes: "Yellow-white tomato, usually round")
Plant.create(name: "East Indian Lemongrass", latin_name: "Cymbopogon flexuosus", season: "Summer", light: "Full Sun", water: "1/day", germ_days: 14, notes: "Can be harvested above root and left to regrow")
Plant.create(name: "San Marzano Tomato", latin_name: "Solanum Lycopersicum", season: "Summer", light: "Full Sun", water: "1/day", germ_days: 14, notes: "Paste tomato")
Plant.create(name: "Cubanelle Pepper", latin_name: "Capsicum annuum", season: "Summer", light: "Full Sun", water: "1/day", germ_days: 14, notes: "Sweet pepper")
Plant.create(name: "Cilantro", latin_name: "Coriandrum sativum", season: "Spring", light: "Full Sun", water: "1/day", germ_days: 14, notes: "Coriander seeds, cilantro leaves")
Plant.create(name: "Mullein", latin_name: "Verbascum thapsus", season: "Spring", light: "Full Sun", water: "1/day", germ_days: 14, notes: "Finicky, sun-dependent. Treats asthma.")