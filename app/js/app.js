//GAH!! LOOK AT THIS N00B USING GLOBALLS!!
var Twitter = {
	init: function( config ){
		this.url = "http://search.twitter.com/search.json?q=%40ubelly&callback=?";
		this.template = config.template;
		this.container = config.container;
		this.fetch();
	},

	attachTemplate: function(){
		var template = Handlebars.compile( this.template );
		this.container.append(template( this.tweets ));
		this.container.listview("refresh");

	},

	fetch : function(){

		var self = this;

		$.getJSON(this.url, function(json){
			self.tweets = $.map(json.results, function(tweet){
				return {
					author : tweet.from_user, 
					tweet : tweet.text, 
					thumb : tweet.profile_image_url,
					url: 'http://twitter.com/' + tweet.from_user + '/status/' + tweet.id_str
				};
			});

			self.attachTemplate();

		});
	}
}

//OH NOES! MOAR GLOBALLS - HES GONNA BREAKZ THE INTRANETZ!!!

var Articles = {
	init: function( config ){
		this.url = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20feed%20WHERE%20url%3D'http%3A%2F%2Ffeeds.feedburner.com%2Fubelly%2F'&format=json";
		this.template = config.template;
		this.container = config.container;
		this.fetch();
	},

	attachTemplate: function(){
		var template = Handlebars.compile( this.template );
		this.container.append(template( this.articles ));
		this.container.listview("refresh");

	},

	fetch : function(){

		var self = this;

		$.getJSON(this.url, function(json){

			self.articles = $.map(json.query.results.item, function(article){
				console.log(article)
				return {
					author : article.creator, 
					title : article.title, 
					count : article.comments[1],
					link : article.link
				};
			});

			self.attachTemplate();

		});
	}
}

$( '#articles' ).live( 'pageinit',function(event){
  Articles.init({
	   template: $('#articleTempl').html(),
	   container: $('ul.articles')	
	})
});
$( '#twitter' ).live( 'pageinit',function(event){
  Twitter.init({
	   template: $('#twitterTempl').html(),
	   container: $('ul.tweets')	
	})
});