# Introduction to React: Hands-On-Practice

## Step 2: Build a static version in React

Now we are going to build the components. It will be a static version. There will be no interaction possible yet.
This helps us focus on each component on its own. And we don't get confused with having to think about them interacting yet.

### Parent component

Let's start with the parent component. It will contain the headline, plus the MarkdownInput and HtmlOutput components.

We put every React component into **its own file**. We already have a **App.js** file. The App component will be our parent component.

Let's set up the basics of the App component:
```
import React from 'react';

const App = function() {
  return (
    <div>
      <h1>Markdown Previewer</h1>
    </div>
  );
};

export default App;
```

#### What are we doing here?

* We **import** React into our component module. Now we can use JSX.
* We then define a **function** called App. This is our component! This means, that our component is just a regular Javascript function! That's why it is called a **functional component**.
* Inside the functional component, there is a **return statement**. Here we put the JSX, that we want the component to render in the browser. For now, we just put the headline tag there. Later, we will also include the other components here.
* At the end of the file, we **export** our component. This means, that we can import and use the component in other files.

### MarkdownInput component

Let's go on and build the MarkdownInput component. It will only contain a textarea, where users can input the markdown.

#### Setting up MarkdownInput component

We create a new file in the src folder called **MarkdownInput.js** and open the file in our editor.

We again set it up as a functional component:
```
import React from 'react';

const MarkdownInput = function() {
  return (
    <textarea
      placeholder="Enter markdown"
    />
  );
};

export default MarkdownInput;
```
We did exactly the same as we did with the App component, but in this case, we added a textarea element with a placeholder attribute.

#### Import MarkdownInput component in parent component

In order to display the MarkdownInput component in the browser, we need to import it in the parent component. So in **App.js** we write:
```
import MarkdownInput from './MarkdownInput.js';
```
In **import statements** you always give the **name of the component** you want to import, along with the **path** to the file where to import from.

Now we can use the MarkdownInput component inside the App.js component. We add it to the JSX in our return statement:
```
return (
  <div>
    <h1>Markdown Previewer</h1>
    <MarkdownInput />
  </div>
);
```
We now included the MarkdownInput component in the parent component with a **custom React component tag**. The tag works just like regular HTML tags.

Be aware that React component names and tag names start with **capital letters**.

### HtmlOutput component

Next, we create the HtmlOutput component.

It will be similar to the MarkdownInput component. But unlike the MarkdownInput component, it will receive some **property**. The property it receives will be a string containing the markdown.

#### Install marked package

We need to transform the markdown into HTML. In order to do that, we use a package called **marked**. We need to install it via NPM. So in the command line, we stop the create-react-app client with **Command + C**, and then type:
```
npm install --save marked
```
After the installation, restart the application with:
```
npm start
```

#### HtmlOutput component setup
We create a new file called **HtmlOutput.js** and open it in the text editor.

We again setup a functional component, but this time, we will also use **props**:
```
import React from 'react';

const HtmlOutput = function(props) {
  return (
    <div>{props.markdown}</div>
  );
};

export default HtmlOutput;
```
We again set up a functional component, but with a few differences:

* Our function this time has a props argument. **props** are the properties a component gets from its parent component. In our case, it is the markdown we want the component to transform to HTML.
* Inside the return statement, we use **curly braces**. This way, we can **access Javascript variables inside of JSX**. Here, we are accessing the markdown of our component's props, and render it.

#### Transform markdown into HTML
Next, we need to find a way to display the markdown as HTML. We installed **marked** to help us, so let's import it into our component. On top of our file, we write:
```
import marked from 'marked';
```
When importing NPM packages, we don't have to specify a path. It's enough to state the name of the package.

Now, let's use the package to transform the markdown. We change the return statement like this:
```
return (
  <div>{marked(props.markdown)}</div>
);
```
Inside the curly braces, we can also **execute Javascript functions**. So we give the markdown to the marked function, and it will return the HTML. This will get rendered in the browser.

#### Add HtmlOutput component to parent component
Now, let's include the HtmlOutput component in the parent component. In App.js we first import the component:
```
import HtmlOutput from './HtmlOutput.js';
```
Then, we include it in the App's JSX, but this time, we will add a property to the tag:
```
return (
  <div>
    <h1>Markdown Previewer</h1>
    <MarkdownInput />
    <HtmlOutput
      markdown="# An Example Header"
    />
  </div>
);
```
This is how we can **give properties to child components**: We just add the attribute and give it a value. It then becomes available to the child component via its **props**.

In this case, we added the attribute **markdown**, and as we already know, it is available to the child component via **props.markdown**.

#### dangerouslySetInnerHTML

When we check what we render in the browser, we will see that the output is not ok for now, as we also see the HTML tags. Why is that?

In our HtmlOutput component, marked transforms the markdown into HTML. It returns a string, containing HTML tags and text. We render this string with the curly braces notation. But why then, is it displaying the HTML tags?

This is a **security feature of JSX**. It is not possible to directly render HTML or React tags with the curly braces notation. JSX always transforms tags inside of curly braces into strings. Like this, it is safe to use the data users have input in forms, or more generally, data that originates outside of our application.

In order to get rid of the HTML tags, we need to make the following change:
```
return (
  <div dangerouslySetInnerHTML={
    {__html: marked(props.markdown)}
  }></div>
);
```
We use the attribute **dangerouslySetInnerHTML** and pass it our transformed markdown within an object.

dangerouslySetInnerHTML allows us to put HTML elements from Javascript variables into JSX tags. It is dangerous, because if we use unknown sources and input it like this, it is dangerous as it could be some **malicious code**.

In our case it is safe to use. Because marked actually does not return HTML tags in the string, but **escaped HTML tags**. Escaped HTML tags look like HTML tags, but they are only strings.

When we now check the output in the browser, we will see that the HTML tags are gone and the output is correct.

So now, we have all the components we need. They all work on their own, but they cannot interact yet. Let's make that happen.

Next: [Step 3: Identify The Minimal (but complete) Representation Of UI State](tutorial-step3.md)