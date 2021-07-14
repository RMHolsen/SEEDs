## 28 May 2021
Created Seeds, Plants,  db migration, controller
MIGRATIONS PENDING

## 18 June 2021
Disregarding Seeds db
Created Pods db (individual seed starter cups)
... on second thought do I really need pods. Do I though.
... ultimately deciding on pods to record germination.

## 21 June 2021
rails _version_ new _name_ --api  to generate the backend 
create separate repos for frontend and backend
--database=postgresql ugh maybe not
further instructions in project notes

## 23 June 2021
First git commit, migrated databases
Added models, routes, some basic controller code to render Json
Added seed data
Added a secrets.yml file (see this format if this comes up again later) because without it localhost in the browser kicked up an error
Created new branch to practice fast_jsonapi
Added serializers on fast_jsonapi branch
Performed merge on Github and pulled updated main branch to local repo. Yay!
Installed rack-cors on frontend-delta branch
Confirmed html and js file are linked on frontend-delta branch
Confirmed js file can read and receive data from api on frontend-delta branch

## 24 June 2021
Wrote some code to process the api data and display it

## 25 June 2021
Wrote some more code to display the api data, now with hideous CSS in order to better see the spacing and arrange everything
Discarded one method of displaying api data until such time as clarification on syntax occurs (see scrapcode.txt)

## 28 June 2021
Added "Add a plant" form, rough start but it's mostly in there. Data needs to clear after each add. 
Reviewed and commented everything with description

## 29 June 2021
(Status: accepted should actually be status: :accepted)

## 1 July 2021
Tested shorter version of writing HTML via JS to front-end, failed, deleted test code from index.js
Tested adding a plant to the bottom of the display after submitting it in the add plant form (not quite)
Refactored plant render method to two separate functions: render all plants and render each plant on its own div/card

## 2 July 2021
Added render plant onto plant card to bottom of create new plant form handler.
To better align with walkthrough, moved currently built index into subfolder for storage and rebuilt index.js with pods instead of plants

## 6 July 2021
Finished rebuilding index.js with pods instead of plants, rebuilt index.html with pods instead of plants, too.
Ran into a bug linking pods to plants. 
Smashed bug. DO NOT FORGET to add the has_many object to the belongs_to object, in this case adding :plant and :plant_id to the pod serializer
TO DO: Try refactoring the addPodCard() function to 1) be in the pods.js file and 2) be closer to the HTML in the example project

## 8 July 2021
~~TO DO: Add 'show plant card' button that pops up a new window with the plant details~~
TO DO: Add edit button to pods so germination rates can be entered.
~~TO DO: Add 'view plants' link to main page?~~

## 9 July 2021
Added validation to make sure the Pod total_count is greater than 0 (if you're not planting any pods, why do you expect any to germinate) (we're not getting into volunteer plants here)
Added link in each pod container to open a new window, for plant details
New window opens plant index page and navigates to the plant desired 
~~TO DO: Redo 'see plant details' to pop up on the same window. Yes this will require rejiggering the CSS some. ~~

## 13 July 2021
Reformatted to three column data layout under new pod form
Added functionality for plant details to pop up on the same window
Added 'clear info' button to each plant details
Added functionality to 'clear info' button so it only clears that specific plant information, so multiple plant informations can be loaded and then cleared
Added edit button functionality to be able to update with germination rates. This took three hours. That was very annoying.

