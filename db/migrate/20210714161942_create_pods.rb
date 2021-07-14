class CreatePods < ActiveRecord::Migration[5.0]
  def change
    create_table :pods do |t|
      t.integer :total_count 
      t.integer :germ_count 
      t.string :season  
      t.string :location 
      t.string :additives 
      t.string :soil 
      t.string :water  
      t.integer :pkg_year 
      t.integer :sow_year 
      t.datetime "created_at",  null: false
      t.datetime "updated_at",  null: false
      t.belongs_to :plant 
    end
  end
end
