var my_news = [{
        author: 'Steve Strubb',
        text: 'I like this in the Summer...'
    },
    {
        author: 'John Doe',
        text: 'When do you next lesson?'
    },
    {
        author: 'Tuuli Korpi',
        text: 'Creativity time for us people...'
    }

];


var News = React.createClass({
            render: function() {
                var last_news = this.props.last_news;
                var newsTemplate = last_news.map(function(item, index){
                    return (
                        <div key={index}>
                            <hr />
                            <h2 className="news_author">{item.author}:</h2>
                            <p className="news_text">{item.text}</p>
                            <hr />
                        </div>
                    )
                })

                return ( 
                <div className = "news">
                    {newsTemplate} 
                </div>
                    );
                }
            });

        var Comments = React.createClass({
            render: function() {
                return ( 
                <div className = "comments">
                    No news - no comments.
                </div>
                );
            }
        });

        var App = React.createClass({
            render: function() {
                return ( 
                <div className = "app">
                    Hello all, I 'm App component! I can display news! 
                    <News last_news = { my_news } /> {/* Add data property */} 
                    <Comments />
                </div>
                );
            }
        });

        ReactDOM.render( 
            <App />,
            document.getElementById('root')
        );