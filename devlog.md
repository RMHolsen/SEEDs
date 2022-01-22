## 14 July 2021
Imported project from dev-junk to main project folder. Created and migrated migrations, created serializers.
Did not kick up same error with the secrets.yml file needed? (see 23 June 2021 in devlog-imported). If it's needed it's in practice_junk_delta
Added serializers
Unusual errors kicking up?? Can't find routes??
It was the config/application.rb file. The rack-cors gem needed that extra bit of code to make the proper connections. REMEMBER THIS IN FUTURE.

## 15 July 2021
Absolutely nothing of structural substance, I just mucked around with some graphics. 

## 19 July 2021
Cleared out some cruft and rearranged some plant IDs around the drop-down plant select form in the index page
Added field to show percentages germinated on Pod card
Added notes field to Plant details display

## 21 July 2021
TO DO: Fix your validations! 
TO DO: Debug the clear info thing, 

## 9 November 2021
Standardized Project Notes, added ReadMe, cleaned up a few notes

## 2 January 2022
Commented out the ABCDE from the project review -- leaving it in to remind myself of the order of operations around fetch requests

## 16 January 2022
Debugged the 'remove plant info' button. RemoveChild is an actual thing, self, you don't need to just clear out the HTML.
Merged debug branch
Cleaned up some cruft from various places, separated add-likes livecode challenge to storage file
Added goals in To Do

## 22 January 2022
Hahaha fixed dates in DevLog whoops
Fussing with buttons on a new branch
Removed leftover cruft from a blog post whoops
Removed title attribute from renderPods function; there is no title attribute in the pods anyway
Added a rough outline of a 'clear pod' button, confirmed via testing 
Added a rough outline of a 'delete pod' button and then commented out; that's for later
Cleared some cruft from pods.js
Added 'render all pods' button, verified clumsy functionality