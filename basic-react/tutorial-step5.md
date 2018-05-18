# Introduction to React: Hands-On-Practice

## Step 5: Add Inverse Data Flow

We are almost done, but what's still missing is the interaction.

So far, nothing happens when a user enters data into the textarea. Let's change that!

### Inverse data flow

What we want to do is **update our state whenever the user enters data in the textarea**.

When state gets updated, React will automatically update the child components.

We will use the **change event** of the textarea along with a **callback function** that will update the state.

### Setup onChange event listening
Let's start with using the change event inside the MarkdownInput component:
```
<textarea
  onChange={props.handleChange}
  placeholder="Enter markdown"
  value={props.markdown}
/>
```
#### What did we do?
* We added the **onChange** attribute to the textarea. JSX offers all Javascript events as attributes.
* We also added the function **handleChange** as an attribute. This function will be called, whenever the change event fires. The change event fires, whenever the user enters or changes data in the textarea.
* The MarkdownInput component gets the handleChange function via props. So we have to define the function in the parent component!

### Setup handleChange function
 In App.js, between the constructor and the render functions, we write:
```
handleChange(event) {
  this.setState({
    markdown: event.target.value
  });
}
```
#### What did we do?
* We created the **handleChange function**. It receives an **event argument**. React automatically gives this argument to event listener functions like this one.
* Inside the function, we use React's **setState** function. Whenever we want to update state, we have to use this function. This way, React knows that state has changed, and it will start updating the components.
* **event.target.value** contains the current value of the textarea from MarkdownInput.

### Pass callback function to child component

Now we need to make sure that the MarkdownInput component gets the handleChange function. We just have to add it as an attribute:
```
<MarkdownInput
  markdown={this.state.markdown}
  handleChange={this.handleChange}
/>
```
As it is a class-based component, the function is only accessible via **this**.

We have to make sure, that **this** is really available, so inside the constructor function, we have to **bind this**:
```
this.handleChange = this.handleChange.bind(this);
```
Whenever you are using event listener functions like we do, you have to bind this.

Now when you check in the browser, you will be able to enter data in the MarkdownInput component, and it is automatically updated in the HtmlOutput component.

**Parabens**, you just completed the Markdown Previewer project!

But, let's make sure it looks a little nicer in the final step.

Next: [Add Bootstrap for some styling](tutorial-step6.md)