# Cloud-Align

Contributor 

Vanessa Peng
Tianqi Wang
Kaixiang Zhang
Yiyang Wang
Joe Xu .



### update notes 2020. 02.28

##### Note:

saved 'reqwest' and 'axios' packages to `Cloud-Align/cloud/package`, so u can simply run `npm install` to update packages.

or:

run `npm install reqwest` and `npm install axios`

##### changed files:

`Cloud-Align/cloud/src/Pages/Friends/Friend.js`

use axios to fetch data insted of  xmlhttp.

[axios tutorial](https://alligator.io/react/axios-react/)

To see a list friend requests, u need to merge master branch to Frontend-Develop, then migrate manage.py and run the server (make sure u make some friend requests via api first). 

##### TODO:

friendslist tomorrow





###update notes 2020. 02.26

  `Cloud-Align/cloud/src/App.js`

  Add new pages

  `Cloud-Align/cloud/src/Components/NavBar.js` </br>

  Rename

  `Cloud-Align/cloud/src/Pages/Friends/Friends.js`

  add link

  `Cloud-Align/cloud/src/Pages/Friends/FriendsList.js`</br>

  `Cloud-Align/cloud/src/Pages/Friends/Following.js`</br>

  add dummy data, 

  ##### TODO

  * now waiting backend api to fetch friend list.

  

---

### update notes 2020. 02.25

* For backend: </br>
  `Cloud-Align/align/friends/views.py : line 29 -32` </br>
  Fix the bug that make me can post friend request now.

* For frontend:
  `Cloud-Align/cloud/src/Components/NavBar.js` </br>
  add dropdown feature </br>

  `Cloud-Align/cloud/src/Pages/FriendParts/CardRequests.py` </br>
  can view user profile via click photo
  </br>

  `Cloud-Align/cloud/src/Pages/Friends.js` </br>
  can fetch friendrequest now

 ##### TODO:

* Following, FriendList in friends management
* accept and decline requests (backend)
* fetch user name in card  (Friends.js)
* if any conflict occurs and if it is hard to resolve, we can retrieve the version updated in Feb 18.
* for mac users, you may need to download bootstrap using command line </br>
  `npm i react-bootstrap --save`
  </br>

  
