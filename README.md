<h1 align="center">
  <br>
  <a href="#"><img style="height: 450px; width: 1175px;" src="./assets/temp.png" alt="HitList Pro by ResilientLabs"></a>
</h1>

<h4 align="center"><i>A sleek progress tracker for resilient job hunters </i>🏋🏽</h4>

<p align="center">
    <a href="https://github.com/Resilient-Labs/Sprint3-HitlistCohort/commits/master">
    <img src="https://img.shields.io/github/last-commit/Resilient-Labs/Sprint3-HitlistCohort.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub last commit">
    <a href="https://github.com/Resilient-Labs/Sprint3-HitlistCohort/issues">
    <img src="https://img.shields.io/github/issues-raw/Resilient-Labs/Sprint3-HitlistCohort.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub issues">
    <a href="https://github.com/Resilient-Labs/Sprint3-HitlistCohort/pulls">
    <img src="https://img.shields.io/github/issues-pr-raw/Resilient-Labs/Sprint3-HitlistCohort.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub pull requests">
</p>
      
<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#updating">Updating</a> •
  <a href="#features">Features</a> •
  <a href="#APIs">APIs</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#credits">Credits</a> •
  <a href="#support">Support</a> •
  <a href="#sponsor">Sponsor</a> •
  <a href="#license">License</a>
</p>

<h2 id="installation">Installation</h2>

<h3>Getting Started</h3>

This app is a monorepo that houses both the frontend and backend of Hitlist Pro. To get the app running you will need to run the backend and frontend independantly. There are some pre-requisites for this project: 

<label class="container">
  <input type="checkbox">
  Node.js (at least version 18 or higher)
  <span class="checkmark"></span>
</label>

<label class="container">
  <input type="checkbox">
  Vite
  <span class="checkmark"></span>
</label>

<label class="container">
  <input type="checkbox">
  NVM (this is optional, but will be helpful. You can also use NPM)
  <span class="checkmark"></span>
</label>

<h3> Running the frontend </h3>

1. Clone the repository onto your machine. 

2. Navigate to ``` ./hitListProject/frontend ```. This is where the frontend app lives. 

3. Run ```npm install ```. If you have an issue downloading the project dependencies, you may have an outdated node version.  If you are using nvm, run ``` nvm use 18.18.0 ```. The required version of the project may change. Check the terminal to determine which version nvm should use. 

4. Run ``` npm run dev ```. This will start the frontend. 

5. Navigate to ``` http://localhost:5174/ ```


To run the front end from the backend folder: 

1. In frontend folder: ```npm run build``` first to create minimized dist directory

2. In frontend folder: ```cp -r dist ../backend``` to copy minimized dist folder from the frontend into backend

3. Still In the frontend folder: ```npm run dev```

4. Then in the backend folder run ```npm run dev```


<h4> Running the backend </h4>

TBD 


<br/>

<h2 id="updating">Updating</h2>

<h3>Workspaces</h3>

This project used workspaces to manage dependencies within its monorepo.  You can read more about how workspaces work <a href="https://docs.npmjs.com/cli/v7/using-npm/workspaces?v=true">here</a> in NPM's documentation. The active workspaces in this project are listed within  ```./package.json``` and ```./package-lock.json```. 

To create a new workspace you can run ```npm init -w [the path of your workspace]```. I do not reccommend updating these files manually since a typo could really ruin your day and introduce bugs. 

<br/>

<h2 id="contributing">Contributing</h2>

<h3>PR Templates</h3>

When you are creating a PR for the project, make sure to fill out the PR template. The template exist within the ./github folder at the root of the project. If you make changes to this template, like all other changes, be sure to create a Pull Request. For more information on the reasoning behind PR templates, see <a href="https://github.com/pieterherman-dev/PR-Template-Guide/blob/main/README.md">This PR Template guide</a> or checkout github's documentation. All PRs should be comparing the main branch to your feature branch. Here is an example of a PR description using the template: <a href="https://github.com/Resilient-Labs/Sprint3-HitlistCohort/pull/31">Documentation Initial Readme</a>

<h3>To Squash or Not To Squash</h3>

Squash. After your PR is approved by our DEV OPs lead, you will want to <u>squash merge</u> your changes. Your commit history leading up to your PR is not needed for posterity. If you don't squash then this history will end up on the main branch. Feel free to keep that record on your machine or on that specific branch.


