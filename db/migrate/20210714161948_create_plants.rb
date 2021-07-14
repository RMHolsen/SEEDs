class CreatePlants < ActiveRecord::Migration[5.0]
  def change
    create_table :plants do |t|
      t.string :name 
      t.string :latin_name 
      t.string :season 
      t.string :light 
      t.string :water 
      t.integer :germ_days 
      t.string :notes 
    end
  end
end
