import React from 'react';

const MarkdownInput = function(props) {
	return (
		<textarea
			className="form-control"
			onChange={props.handleChange}
			placeholder="Enter markdown"
			value={props.markdown}
		/>
	);
};

export default MarkdownInput;
