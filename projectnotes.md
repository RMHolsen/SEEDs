## To Do
-- debug current bugs list
-- ON SEPARATE BRANCH start setting up either gardens or users or years, some way to keep the data separate for different attempts
-- actually, if you want to do years, this could be solved by simply adding some sort of sort method for 'year sown' and making it a clickable/sortable 
-- in which case also then you need to add a clear pod button to the front and then maybe a show all pods for this year button
-- that could be WAY more useful than setting it up by users, at least for such a small scope

## Stretch Goals
-- add date stamp to pod records. this will be more complicated than it looks: created at is easy and may be demonstrable in project assessment. updated at will feed only the date to an array which will then be filtered for unique dates (so multiple updates on the same day don't get registered; plants don't change that fast unless groundhogs are eating them) and spat back into the general record array. don't forget to add this to the javascript object
-- ~~add notes field to plant records~~
-- User models?? Garden models?? some way to group pods so different people can use it??? Or should this be an entire other project using Project SEEDs as a base but ... yeah, I don't know, but consider this.
-- SOIL soil is a pod field but not displayed on the page or the form. There are too damn many conditionals. 

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

## Bugs
Find a less server heavy way to clear the pod box around lines 109-110 of pods.js.
Fix validations (I don't even remember where the validations were broken.)

## Notes

## Requirements
--The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.
--The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.
--The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.
--The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.
