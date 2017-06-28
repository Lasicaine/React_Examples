var my_news = [{
        author: 'Steve Strubb',
        text: 'Ovatko suomalaiset tutkijat kehnoja hakijoita vai missä vika – eurooppalainen tutkimusrahoitus jää usein saamatta',
        bigText: 'Euroopan tutkimusneuvosto (ERC) myöntää rahoitusta huippututkijoille ja heidän ryhmilleen uraauurtavaan tieteen tekoon pari miljardia euroa vuodessa. Suomalaisilla on huomattavasti parannettavaa ERC-rahoituksen hakemisessa.'
    },
    {
        author: 'John Doe',
        text: 'Näin maatalous muuttuu: härkäpapua viljellään jo enemmän kuin perunaa',
        bigText: 'Valkuaispitoinen suosikkikasvi härkäpapu maistuu niin ihmisille kuin tuotantoeläimille.'
    },
    {
        author: 'Tuuli Korpi',
        text: 'Koko kesä asunnottomana Saimaalla – "Elämässä täytyy tehdä muutakin kuin töitä"',
        bigText: 'Retkeilijä Olli Järvenkylä on tämän kesän onnellisesti työtön ja koditon. Mies aloitti sadan päivän mittaisen retkensä Saimaalla heti jäiden lähdettyä.'
    },
    {
        author: 'Krista Luuminki',
        text: 'Marcus Grönholm palaa Toyotan rattiin Jyväskylän MM-rallissa: ”Tulee aika jännää”',
        bigText: 'Grönholmin rallitallin järjestämä tempaus on eräänlaisen ympyrän sulkeutuminen, sillä rallilegenda ajoi uransa ensimäisen MM-rallien pohja-ajan juuri Harjulla 25 vuotta sitten.'
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