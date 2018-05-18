# Introduction to React: Hands-On-Practice

## Step 1: Start with a mock, and break the UI into a component hierarchy

According to our [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) guide, before we actually code, we start with a **mock**. This is true for building React apps, but it is generally a good practice to create a mock before coding!

### What the mock?!

Why? Because creating a mock beforehand helps us avoid writing chaotic, spaghetti code. Because with the mock, we realize: 
* what components we need to implement
* the relationship and hierarchy between the components

Plus, with the mock, it is easy to split the User Interface (UI) into a component hierarchy.

### Explore the mock

Let's explore the mock:

![mock](https://github.com/freeCodeCampLisbon/eventos/blob/master/basic-react/markdown-previewer/mock/markdown-previewer-mock.png)

We see that we have three components:

We have a parent component (red). It has a headline, and two child components:
* MarkdownInput (blue): It has a textarea where users can enter markdown
* HtmlOutput (green): It has a div that displays the entered markdown as HTML

This time, the mock was already created for you. In future, you should do it yourself. You can do it online on [draw.io](https://draw.io). Or you can use tools like [Pencil](https://pencil.evolus.vn/) or [Balsamiq](https://balsamiq.com/) for your desktop.

### Create component hierarchy

Based on the mock, we can create the following hierarchy of our React components:

![Component hierarchy](https://github.com/freeCodeCampLisbon/eventos/blob/master/basic-react/markdown-previewer/mock/markdown-previewer-component-hierarchy.png)

Now that we know about the components and their relationship, let's go on to coding!

Next: [Step 2: Build a static version in React](tutorial-step2.md)