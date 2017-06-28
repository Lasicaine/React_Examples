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
    },
    {
        author: 'Krista Luuminki',
        text: 'Suomi 100'
    }
];

var Article = React.createClass({
    render: function() {
        var author = this.props.lastNews.author,
            text = this.props.lastNews.text;

        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
            </div>
        )
    }
});

var News = React.createClass({
            render: function() {
                var lastNews = this.props.lastNews;
                var lastNewsLength = lastNews.length;
                var newsTemplate;
                
                if (lastNewsLength > 0) {
                    newsTemplate = lastNews.map(function(item, index){
                    return (
                        <div key={index}>
                            <Article lastNews={item} />
                        </div>
                    )
                }) 
                } else {
                    newsTemplate = <p>Sorry, no News.</p>
                }

                return ( 
                <div className = "news">
                    {newsTemplate}
                    <strong className={'news__count' + (lastNewsLength > 0 ? '':' none')}>Total News: {lastNewsLength}</strong> 
                </div>
                    );
                }
});

var App = React.createClass({
            render: function() {
                return ( 
                <div className = "app">
                    <h1>News</h1>
                    <News lastNews = {my_news} /> {/* Add data property */} 
                </div>
                );
            }
        });

        ReactDOM.render( 
            <App />,
            document.getElementById('root')
        );