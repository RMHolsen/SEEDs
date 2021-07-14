## Stretch Goals
-- add date stamp to pod records. this will be more complicated than it looks: created at is easy and may be demonstrable in project assessment. updated at will feed only the date to an array which will then be filtered for unique dates (so multiple updates on the same day don't get registered; plants don't change that fast unless groundhogs are eating them) and spat back into the general record array. don't forget to add this to the javascript object
-- add notes field to plant records

## Migrations
PODS
t.integer :total_count # how many did I plant
t.integer :germ_count # how many germinated
t.string :season # when did I plant it 
t.string :location  # where did I plant it, direct-sow or seed starter system
t.string :additives # what did I add to the soil
# t.string :light 
# Not strictly necessary at this point given how I'm planting but other people, if deployed, might have these as factors.
t.string :soil # whose soil did I use, or a mixture
t.string :water  # how did I water it
t.integer :pkg_year # when was it packaged 
t.integer :sow_year # when did I plant it
t.belongs_to :plant # a pod belongs to the plant planted in it
t.datetime "created_at",  null: false
t.datetime "updated_at",  null: false

PLANTS
t.string :name 
t.string :latin_name 
t.string :season 
t.string :light 
t.string :water 
t.integer :germ_days 
t.string :notes 
# t.integer :how_many (Kept here as an artifact but no longer needed since this will now be general plant information rather than specific to the garden being grown.)
