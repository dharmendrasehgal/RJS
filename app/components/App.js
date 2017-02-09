import React from 'react';
import TreeNode from './TreeNode';
import items from '../treeData';

require('./Appcss.scss');

class App extends React.Component{
	render(){
		return (
			<TreeNode node={items} defaultCollapsed={false} />
		);
	}
}

export default App;

/*
Please incorporate the feedback as mentioned below:
•         Use LESS/ SASS for styling #
•         Styles should not be part of HTML #
•         Use complete ES6 implementation. #
•         Try to create JSX files for react component.# 
•         propType definition is not complete and is not correctly done for the props. Please correct the same #--
•         Render method of component should be neat and does not cater to business logic . Please clean 
•         Please do not incorporate complete logic in one component , split it and create separate child components.
•         Try to get data from the service call and not hardcode the data. #
•         Create Test cases for the example .

*/