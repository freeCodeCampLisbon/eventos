# Introduction to React: Hands-On-Practice

## Step 3: Identify The Minimal (but complete) Representation Of UI State

In the next step, we need to identify our application's state.

### What is state?

React uses **state** to decide when it is necessary to **update any of the components**.

It is important to only include the **minimum properties** that are necessary to represent our components.

Like this, React can check the state properties very efficiently.

### What is our state?

In our project, our components only depend on one property, the **markdown**. Whenever the user enters data in MarkdownInput, we want the HtmlOutput component to update.

This means, we need to **include the markdown in our state**, so React can use it to make the updates.

Now that we know about our minimal state, we can go on to the next step.

Next: [Step 4: Identify Where Your State Should Live](tutorial-step4.md)