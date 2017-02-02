var React = require('react');
var PropTypes = React.PropTypes;

const TreeNode = React.createClass({
	propTypes: {
		collapsed: PropTypes.bool,
		defaultCollapsed: PropTypes.bool
	  },
	getInitialState: function(){
		return {
			collapsed: !this.props.defaultCollapsed
		}
	},
	render: function(){
		var childNodes;
		if(this.props.node.items != null){
			childNodes = this.props.node.items.map(
				function(node, index){
					if(node.items){
						return <li key={index} className="clildNodes"><TreeNode node={node} /></li>
					}
					else{
						return <li key={index} className="nodeItem"><TreeNode node={node} /></li>
					}
				}
			);
		}
		var style = {};
		if(!this.state.collapsed){
			style.display = 'none';
		}
		const arrow = <div className="arrowImg"
			onClick={this.handleClick}/>;
		var iscollapsed;
		if(this.state.collapsed){ 
			iscollapsed = 'tree-view expended'
		} else{ 
			iscollapsed = 'tree-view collapsed'
		}
		return (
			<div className={iscollapsed}>
				<div className="node" onClick={this.toggle}>{arrow} {this.props.node.label}</div>
				<ul style={style}>
					{childNodes}
				</ul>
			</div>
		);
	},
	toggle: function(){
		this.setState({collapsed: !this.state.collapsed});
	}
});

module.exports = TreeNode;