let ARTICLES = [
	{
		id: 1,
		author: 'Yura Jun',
		article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perferendis hic deserunt cumque reiciendis distinctio repellat doloremque in, quas, itaque velit molestias, eos debitis dignissimos quaerat sed explicabo qui rem.',
		time: '12-20-30'
	}, {
		id: 2,
		author: 'Vasya Pupkin',
		article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate non omnis facilis, tempora! Doloribus veritatis, suscipit nostrum aperiam minus, provident neque ipsum repellat deserunt totam alias optio blanditiis architecto! Laudantium iste laboriosam repellendus reiciendis commodi illo ullam beatae porro possimus unde nihil, veniam inventore alias, et fugit dolores quas. Reprehenderit id quos sapiente natus dignissimos ab eius aperiam maxime provident, quod laborum esse dolorem possimus repudiandae inventore accusantium iure unde veritatis ut dolore qui minima quasi sint necessitatibus sunt. Ad ut velit adipisci beatae reprehenderit, impedit facilis. Hic quasi quos perspiciatis architecto earum minus et, ea fugit, voluptas, at quas.',
		time: '33-44-55'
	}
];


let Article = React.createClass({
	render: function (){
		return (
			<li>
				<div> {this.props.author} </div>
				<div> {this.props.article} </div>
				<div> {this.props.time} </div>
			</li>
		);
	}
});

let ArticleList = React.createClass({
	getInitialState: function() {
		return {
			displayedContacts: ARTICLES
		};
	},

	handleSearch: function(event) {
		var searchQuery = event.target.value.toLowerCase();
		var displayedContacts = ARTICLES.filter(function(el) {
		var searchValue = el.author.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});

		this.setState({
			displayedContacts: displayedContacts
		});
	},

	render: function (){
		return (
			<div>
				<input type='text' onChange={this.handleSearch} />
				<ul>
					{
						this.state.displayedContacts.map(function (el){
							return <Article key={el.id}
															author={el.author}
															article={el.article}
															time={el.time} />;
						})
					}
				</ul>
			</div>
		);
	}
});

ReactDOM.render(
	<ArticleList />,
	document.querySelector('.content')
);

