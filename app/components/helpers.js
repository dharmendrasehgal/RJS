import React from 'react';
import axios from 'axios';

class FetchData extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			items: []
		};
	};
	componentDidMount(){
		axios.get(`http://localhost:8080/app/repos.js`)
		.then(res => {
			debugger;
			const items = res.data.map(obj => obj);
			this.setState({items: items});
		});
	}
	render(){
		return (
			<div>
				<h1>{`/r/${this.props.subreddit}`}</h1>
				<ul>
				  {this.state.items.map(function(item, i) {
					  var owner = item.owner;
					  if(owner){
						  return (
								<li key={item.id}>{item.name}
									<div className="childrens">
										<p><img src={owner.avatar_url} width="90" height="90" alt="" /></p>
										<ul>
											<li>{owner.login}</li>
											<li>{owner.id}</li>
											<li>{owner.url}</li>
											<li>{owner.html_url}</li>
											<li>{owner.followers_url}</li>
											<li>{owner.following_url}</li>
											<li>{owner.gists_url}</li>
											<li>{owner.type}</li>
										</ul>
									</div>
								</li>
							);
					  } else{
						  return (
							<li key={item.id}>{item.name}</li>
						);
					  }
				  })}
				</ul>
			  </div>
		);
	}
}

export default FetchData;