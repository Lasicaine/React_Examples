var News = React.createClass({
    render: function() {
        return (
            <div className="news">
                Sorry, no news at the time =(
            </div>
        );
    }
});

var Comments = React.createClass({
    render: function() {
        return (
            <div className="comments">
                No news - no comments.
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className = "app">
            Hello all, I'm App component! I can display news!
            <News />
            <Comments />
            </div>
        );
    }
});

ReactDOM.render( 
    <App /> ,
    document.getElementById('root')
);