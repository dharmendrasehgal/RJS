var React = require('react');
var TreeNode = require('./TreeNode');
var items = require('../treeData');

var App = React.createClass({
	render: function(){
		return (
			<TreeNode node={items} defaultCollapsed={false} />
		);
	}
});

module.exports = App;