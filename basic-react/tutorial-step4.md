# Introduction to React: Hands-On-Practice

## Step 4: Identify Where Your State Should Live

### Where to put our state?

Now we need to find out, where to put our state.

In general, you always try to lift your state up as much as possible in the component hierarchy. For more complex applications like ours, you can read more about that in the React Documentation: [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html).

In our case it makes sense to put the state into the parent App component. Like this, we can use the state for both child components.

### Create a state-ful component

So far, we have used functional components. They are also called **state-less components**, because they cannot have a state property.

There are also **state-ful components**. They are **class-based**.

In general, you try to have **as little state-ful components as possible**. Because whenever there is state, it means, React has to monitor it. When it is just a functional, state-less component, there is nothing to monitor.

So always try to start with a functional component, and only turn it into a class-based component, when it becomes necessary.

Let's change our App component from a functional to a class-based component:
```
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <MarkdownInput />
        <HtmlOutput
          markdown="# A Sample Header"
        />
      </div>
    );
  }
}
```
#### What did we change?
* We changed App from a function to a **class** that extends **React.Component**. Via the extension our class becomes the extra functionalities of a state-ful React component.
* We also included a **render method**. It contains the exact return statement that our functional component had. The render method gets executed every time React updates our component.

### Add state

Next, we need to add state to our component. Before the render function we add a constructor function:
```
constructor(props) {
  super(props);
  this.state = {
    markdown: ''
  };
}
```
#### What did we do?
* We added a **constructor function**. Every time a class-based component gets initiated, the constructor is run. So here is the location where we can configure our component.
* The constructor function gets a **props argument** and inside the constructor function, we always have to call **super(props)** first.
* Then we define our **state object** inside the constructor with **this.state**. It is just a regular Javascript object with key-value pairs.
* We also added markdown as our only state property.

### Pass state to child components as props

So far, our HtmlOutput component displays a hard coded placeholder string, that we pass as an attribute.

Let's use the value from our state instead:
```
<HtmlOutput
  markdown={this.state.markdown}
/>
```
* We use the curly braces again to access the value from our state object.
* As you can see, we can access the values from state via **this.state**.
* Now, every time our markdown changes, the HtmlOutput component gets re-rendered with the new value!

### Setting the value of MarkdownInput

We also want our MarkdownInput component to use the value from the state. So let's also pass it to it:
```
<MarkdownInput
  markdown={this.state.markdown}
/>
```
Now, also the MarkdownInput component receives the markdown from the state.

This is one of the key features of React: **data flows from top to bottom**. The child component receives its value from the parent component.

**What is state in the parent component, becomes props in the child component. Child components can never change props. Only state can be changed in the parent component. Like this, changes in state affect the props of child components.**

In the MarkdownInput component, we now can use the markdown via **props**:
```
const MarkdownInput = function(props) {
  return (
    <textarea
      placeholder="Enter markdown"
      value={props.markdown}
    />
  );
};
```
#### What did we do?
* As our functional component now receives props, we need to add props as an argument to the function.
* Inside the textarea attribute, we set the value of the textarea to the markdown we receive via props.

Now, both our MarkdownInput and HtmlOuput component are linked to the markdown value from state. They will always be **in sync** and display the same value.

### Default text

So far, we don't display anything in the beginning, as we set the markdown state property to an empty string.

Let's change that to display a **default text**:
```
this.state = {
  markdown: 'This **markdown** gets transformed into HTML'
};
```
When you now check your browser, you will see that the default text gets displayed in both of our components.

Next: [Step 5: Add Inverse Data Flow](tutorial-step5.md)