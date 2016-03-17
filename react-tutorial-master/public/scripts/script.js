var Page = React.createClass({
  render: function() {
      return (<Posts />);
  }
});

var Posts = React.createClass({
  render: function() {
    var posts = [];

    posts.push({Title: 'Título 1', Content: 'Conteúdo blevers blevers blevers...'});
    posts.push({Title: 'Título 2', Content: 'Conteúdo blevers blevers blevers...'});
    posts.push({Title: 'Título 3', Content: 'Conteúdo blevers blevers blevers...'});
    posts.push({Title: 'Título 4', Content: 'Conteúdo blevers blevers blevers...'});

    var renderedPosts = posts.map(function (post) {
      return (<Post postData={post} key={post.Title}/>);
    });

    return (<div>{renderedPosts}</div>);
  }
});

var Post = React.createClass({
  render: function() {
    var postData = this.props.postData;

    return (<div className="post">
              <h1>{postData.Title}</h1>
              <h2>{postData.Content}</h2>
            </div>);
  }
});

ReactDOM.render(<Page />, document.getElementById('content'));
