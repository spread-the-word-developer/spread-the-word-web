## depreciated
this repo is currently depreciated and now holds the setup for the new repos pleasse follow the steps belo to get started

## prerequisite
before we start its important you have the correct prerequisite installed

1) NodeJS 
2) git 
3) ide/editor of your choice but I recoment VSCode
4) make sure you have contributor privelages/access to the github links:
https://github.com/spread-the-word-developer/stwWebFrontend
https://github.com/spread-the-word-developer/stwWebBackend

## now that we have the prequisites set up we can move onto setting up the local enviroment
note that these steps are for windows but similar steps should work on other os's

1) make a new foder wherever youd like to hold the code base

```
mkdir spreadTheWord
cd spreadTheWord\
```

2) make a new folder to host the backend repo and cd into it 
```
mkdir stwBackend
cd stwBackend
```
3) clone the backend repository: https://github.com/spread-the-word-developer/stwWebBackend
*note I dont remember if git clone links change so you may want to copy it from the site
```
git clone "https://github.com/spread-the-word-developer/stwWebBackend.git"
```
4) cd out and repeat for the front end repository: https://github.com/spread-the-word-developer/stwWebFrontend
```
cd ..
mkdir stwFrontend
cd stwFrontend
git clone "https://github.com/spread-the-word-developer/stwWebFrontend.git"
```
you now have the code base in your local next is the steps to run it
1) cd into the frontend folder and run npm i
```
cd stwWebFrontend 
npm i
```
2) do the same with the backend folder 
```
cd stwWebBackend 
npm i
```
its going to get a bit more tricky now so follow along closely

1) open up the code in your editor, I recomend doing this from outside both folders

2) open up /stwBackend/app.js and look for this line of code
```
const db = require('./config/publicKeys').mongoURI;
```
change it to:
```
const db = require('./config/keys').mongoURI;
```
^^^^^^^^^^^ make sure you never commit this change this is a temporary fix that ive been too lazy to adress
then save

3) make a new folder in stwBackend called config

4) make a new file in stwBackend/config called keys.js

5) open up slack and in the web-development thread look under the pinned messaegs for the file keys.js

6) copy its content into the one in your editor and save

7) open up a new terminal and open /stwFrontend

we know need to set the process variables these steps work for windows hopefully they work for you

8) run in the stwFrontend Folder
```
$env:REACT_APP_BACKEND_URL = "localhost:5000"
```
9) run in the stwBackend Folder
```
$env:FRONTEND_URL = "localhost:3000"
```
to check that they are set run $env:REACT_APP_BACKEND_URL or $env:FRONTEND_URL and you should see the value 

## running the code

finally I think we can run it
1) open up two seperate terminals and in the cd one into the backend folder 1) and the other in the frontend
2) in the backend run
```
npm start 
```
3) in the frontend run 
```
npm start 
```
^ this should launch a browser tab openend to localhost:3000/ and after its done compiling the webpage should be visable
if the backend is also connected right then all components should be vissible and if you look at the backend terminal it should look as if the two are communicating

if you have gotten any errors during the above steps please reach out to the team

## info 

you can view the teams kanban at: https://trello.com/invite/b/eAeYVQlz/1ac6f71b8825cceda9ade583f1e8b70a/kanban-spread-the-word
and feel free to update it or suggest ideas to the backlog
we dont have a formal code review process atm so currently you make a change, commit it with a relevant message and then git pull and git push to move it to the repository

however we do plan on changing that to a merge request based code review process so maybe have a look at how thats done aswell

## documentation

[this is empty cause we're lazy]
















