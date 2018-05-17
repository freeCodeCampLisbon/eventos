# Introduction to React: Hands-On-Practice

## Intro

This tutorial will be a step by step guide to build the Markdown Previewer project from freeCodeCamp's curriculum.

You only need to know HTML and basic Javascript in order to use it. Don't be afraid of React, it is really a lot easier than you might think.

We will follow the recommended way to build React projects, that is explained in the React documentation: [Thinking in React](https://reactjs.org/docs/thinking-in-react.html).

### create-react-app Client

We will use the [create-react-app client](https://github.com/facebook/create-react-app). It automatically sets up a React environment for you, so you don't have to worry about any configuration. You can directly start building the project. It is generally recommended to use this client when working with React!

### User Stories

Let's see what [user stories](https://www.freecodecamp.org/challenges/build-a-markdown-previewer) freeCodeCamp wants us to implement for the Markdown Previewer project:

* I can type GitHub-flavored Markdown into a text area.
* I can see a preview of the output of my markdown that is updated as I type.

### So what is Markdown?

Markdown is familiar to HTML, but it uses a different, simpler syntax. What we need to do is, take the markdown a user enters and display it as HTML. We will use a tool called marked. It will translate Markdown to HTML for us.

### Example of what we will build

[Here](https://codepen.io/freeCodeCamp/full/JXrLLE) is a [live example](https://codepen.io/freeCodeCamp/full/JXrLLE) of what the project will look like.

Let's get started!

## Setting up the create-react-app client

Before we start, we need to setup the create-react-app client.

We will install the client from NPM. You need to have Node installed. If you don't, download and install the latest Long-Term-Support (LTS) version from the [NodeJS website](https://nodejs.org/en/download/).

### Installing create-react-app Client

To install the client, type the following command into the command line:
```
npm install -g create-react-app
```
You can test, whether the client was installed successfully by typing:
```
create-react-app --version
```
You should see something like **1.5.2**

### Setting up the project with the client

Now move to the parent folder that you want to contain the project. We setup our Markdown Previewer project with the create-react-app client like this:
```
create-react-app markdown-previewer
```
The client will now install everything we need for us in the project folder **markdown-previewer**.

### Starting the sample application

We change into the project folder:
```
cd markdown-previewer
```
The project folder already contains a sample application. Whenever we are in the project folder, we can start the application by typing:
```
npm start
```
Now the application gets started. In a web browser, we can now access the application by entering the following address:
```
localhost:3000
```
**localhost** is a server that runs locally and hosts our React application.

It is in **watch-mode**, that means, whenever we make changes in our source code, it will automatically update the output in our browser.

### Stopping the application

Whenever you want to stop the app, you can press the following keys on your keyboard:
```
Control + C
```

### Getting rid of the sample application

All files of our React application are now in the **src** folder. So let's open that folder in our code editor.

There is one React component defined in the App.js file.

We want to start our project fresh, so let's get rid of the example and delete everything in App.js.

We now have an empty App.js file, and it's time to really get started.


## Step 1: Start with a mock, and break the UI into a component hierarchy

### What the mock?!

According to our **Thinking in React** guide, before we actually code, we start with a mock.

Doing that beforehand, helps us avoid writing chaotic, spaghetti code. Because with the mockup, we realize: 
* what components we need to implement
* the relationship and hierarchy between the components

So with the mock, we can split the User Interface (UI) into a component hierarchy.

### Create component hierarchy
Let's explore the mock:

![mock](https://github.com/freeCodeCampLisbon/eventos/blob/master/basic-react/markdown-previewer/mock/markdown-previewer-mock.png)

We see that we have three components:

MarkdownPreviewer is the parent component. It has to child components:
* MarkdownInput: Here users can enter markdown.
* HtmlOutput: It displays the entered markdown as HTML

This time, the mock was already created for you. In future, you should do it yourself. You can do it online on [draw.io](https://draw.io). Or you can use tools like [Pencil](https://pencil.evolus.vn/) for your desktop.

