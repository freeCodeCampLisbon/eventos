import React from 'react';
import MarkdownInput from './MarkdownInput.js';
import HtmlOutput from './HtmlOutput.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markdown: 'This **markdown** gets transformed into HTML',
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({
			markdown: event.target.value
		});
	}
	
	render() {
		return (
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
		);
	}
}

export default App;
