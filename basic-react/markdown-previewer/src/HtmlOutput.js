import React from 'react';
import marked from 'marked';

const HtmlOutput = function(props) {
  return (
    <div dangerouslySetInnerHTML={{__html: marked(props.markdown)}}></div>
  );
};

export default HtmlOutput;
