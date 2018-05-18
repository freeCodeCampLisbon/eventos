# Introduction to React: Hands-On-Practice

## Add Bootstrap for some styling

Finally, we want to make the Markdown Previewer look a little nicer. We will use Bootstrap to do that easily.

### Include Bootstrap via CDN

The easiest way to include Bootstrap is via a Content Distribution Network (CDN).

Inside the **public folder**, there is the **index.html** file.

The index.html file is the only real HTML file in our project. Our React application and the HTML that is created via JSX is inserted in the **root div**.

We only want to include Bootstrap, and we do that in the **head** section:
```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
```

### Use Bootstrap's Grid
Let's use Bootstrap's grid system to display the MarkdownInput and HtmlOutput components properly. We change the JSX inside the App component like this:
```
<div className="container">
  <h1 className="text-center">Markdown Previewer</h1>
  <div className="row">
    <div className="col col-12 col-md-6">
      <MarkdownInput
        markdown={this.state.markdown}
        handleChange={this.handleChange}
      />
    </div>
    <div className="col col-12 col-md-6">
      <HtmlOutput
        markdown={this.state.markdown}
      />
    </div>
  </div>
</div>
```
#### What did we do?
* We used **Bootstrap's grid classes**: container, row, col to create a responsive display of the MarkdownInput and HtmlOutput components.
* Note that in JSX, we have to use **className** to give CSS classes to elements.

### Use Bootstrap's Form style
We also want our textarea to look a little nicer, so let's add the **form-control** class to the textarea in our  MarkdownInput component:
```
<textarea
  className="form-control"
  onChange={props.handleChange}
  placeholder="Enter markdown"
  value={props.markdown}
/>
```

And that's it. You completed the MarkdownPreviewer, the first challenge in freeCodeCamp's Data Visualization Certification!