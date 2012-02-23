jQuery Mobile is to mobile what jQuery UI is to desktop. It's a touch optimised framework that makes building mobile optimised sites and apps a breeze for anyone beginning in the world of mobile application development using web technologies.

The team behind jQuery mobile have set out to make a framework that can be used along with jQuery core and make developing a mobile site as painless as possible, and they have pretty much delivered. If you have any experience at all with markup, getting started with jQuery mobile will not be a problem at all. 

The important thing to remember is that jQuery mobile is a mobile first framework and works just as well to help build apps for desktop browsers. 

Before you jump into jQuery mobile, make sure that it will support the platforms you are aiming for. The support for jQuery mobile is Graded A-C. Grade A browsers will generally support the Ajax based animated paging. Grade B get a downgraded version without the Ajax navigation and Grade C have an experience that is functional, but basic. You can check out what OS/Browsers get what grade <a href="http://jquerymobile.com/gbs/">here</a>

We're going to build a simple application, one that you could build for your own site (if you have one), and give a very general overview of how to use jQuery Mobile.

<hr>

<h2>Setting up our page</h2>

We are going to start with a basic page template, pretty much the same as when you would build any web site.

<code>
<!DOCTYPE html>
<html>
   <head>
   <meta charset="utf-8">

   <title>Ubelly</title> 

</head>

<body>
 <div data-role="page">

   <header data-role="header">
   		<h1>Ubelly</h1>
   </header>

   <div data-role="content">

   </div>

    <footer data-role="footer" data-theme="b">

   </footer>

</div>

</body>
</html>

</code>

jQuery Mobile uses the custom data-* attribute to assign roles to elements. In this basic single page template we have assigned 3 roles to elements, header, content and footer. Before we load up this page in our simulator, we need to go ahead and include a couple of scripts first. jQuery and jQuery Mobile javascript are needed, currently jQuery Mobile works with the 1.6.4 release of jQuery, and then we need to inclde the jQuery mobile CSS.

There are two different stylesheets that you can use. One of them is structure CSS and the other one is a theme. If you are fine with the basic theme that comes with jQuery Mobile, you can go ahead and use the basic theme, but its likely that you'd want to create you own base theme for you application and for that you can use the <a href="http://jquerymobile.com/themeroller/">themeroller</a>.

The ThemeRoller allows you to create a theme for you application by setting up the Fonts, Button States, Header and Footer colours - all sorts of styles can be set up in the themeroller - and you cant set up to 26 different themes for a single style sheet. Once you are done you can download the theme and get both a development version and a minified version. 

Go ahead and include the JS and CSS into your page.

<code>

<!-- JQM Structure -->
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0.1/jquery.mobile.structure-1.0.1.min.css" />
<!-- JQM Custom Theme -->
<link rel="stylesheet" href="css/ubtheme.css" />
<!-- JQ Core -->
<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
<!-- JQM -->
<script src="http://code.jquery.com/mobile/1.0.1/jquery.mobile-1.0.1.min.js"></script>

</code>

IMG 1

Not exactly perfect, what we need to do is add some viewport meta tags. If you need to understand the viewport in more detail, check out <a href="https://twitter.com/#!/ppk">PPK's</a> <a href="http://www.quirksmode.org/mobile/viewports.html">Tale of two viewports articles</a>. The following meta tags need to added to the head of your document.

<code>
	<!-- Viewport -->
   <meta name="viewport" content="width=device-width">

    <!-- iOS stuff -->
   <link rel="apple-touch-icon-precomposed" href="img/touch-icon.png">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="white">

	<!-- Mobile IE allows us to activate ClearType technology for smoothing fonts for easy reading -->
	<meta http-equiv="cleartype" content="on">
	<!-- For mobile browsers that do not recognize the viewport tag -->
	<meta name="MobileOptimized" content="320"/>
</code>

The additional "iOS Stuff" are the options to set up the app when and if the user adds it to their homescreen. It sets the ICON for the homescreen, makes it web app (get's rid of the URL bar + Footer Nav) when on the home screen and sets the colour of the bar at the top. You can also add a splash screen if wanted with <pre><link rel="apple-touch-startup-image" href="img/splash.png"></pre>.

Now if you reload the page you get something that looks like the following.

IMG 2

A bit better. Now we can get on with creating some content and another page.

<hr>

<h2>Single page or Multi Page</h2>

When building your jQuery Mobile app, you have a couple of choices on how to handle you pages within the app. You can either have all of you app in a single document or you can have your app fragmented out on seperate pages. If your app is reasonably big and has a lot of functionality, you will probably need to go the later route. As jQM loads internal links via Ajax, as long as you page fragment is defined as a page using the data-role attribute. Alternativly, assuming that the application is going to be reasonably small, you can load everything as a single page a jQM will take care of paging between everything. For this app, we are going to only have two pages, so we can load it in a single request. 

<code>
   
<body>
 <div data-role="page" id="twitter">

   <header data-role="header">
         <h1>Ubelly</h1>
   </header>

   <div data-role="content">
      
   </div>

    <footer data-role="footer" >
         
   </footer>

 </div>

 <div data-role="page" id="articles">

   <header data-role="header">
         <h1>Ubelly</h1>
   </header>

   <div data-role="content">
      
   </div>

   <footer data-role="footer" >
         
   </footer>

 </div>
</body>

</code>

Note that we have given the pages an ID, this is so we can navigate to that page via a link or button. Within the content container, we can add any standard HTML elements we like and style them how we might want. Thankfully there are a few common elements that jQm have taken care of for us and given them some default styles - which you can override if needed.

<hr>

<h2>Some Common Elements</h2>

Lists are created in the same way you would normally with the additional role of listview. To make the list look like it's an inset view, add data-inset="true".


<code>
   <ul data-role="listview" data-inset="true">
      <li><a href="#">Acura</a></li>
      <li><a href="#">Audi</a></li>
      <li><a href="#">BMW</a></li>
      <li><a href="#">Cadillac</a></li>
      <li><a href="#">Ferrari</a></li>
   </ul>
</code>

There are a lot of different types of listview available by default, which you can check out <a href="http://jquerymobile.com/demos/1.0.1/docs/lists/docs-lists.html">here</a>

Form elements are taken care of too. Text inputs, text areas, sliders, toggle switches, checkboxes and radio buttons are all taken care of by simply using the common form elements you would use. You can check out all the form elements <a href="http://jquerymobile.com/demos/1.0.1/docs/forms/forms-all.html">here</a>.

Buttons are made simply by assigning a data-role="button" to either an anchor tag or even a button. There are multiple button options available such as adding an icon and defining it's position, the icon can either be one pre-supplied by jQM or even a 3rd party icon from somewhere like <a href="http://glyphish.com/">Glyphish</a> (which are awesome and the 'pro' pack is worth every penny). Check out all the button options <a href="http://jquerymobile.com/demos/1.0.1/docs/buttons/buttons-types.html">here</a>.

Each element can be styled seperatly using the data-theme attribute, when you have set up your swatches in Themeroller, you can acces the different styles using the data-theme attribute. Any child element will adopt their parents set theme and unless definied the default theme is set to a.

<hr>

<h2>Building a simple app</h2>

I'm going to quickly build a basic application that has two pages, one of the pages follows @ubelly activity on twitter and the other pulls some articles from the ubelly site. I won't go into too much detail into the Javascript being written (please excuse how bad it is) to achieve this, nor will I go into the templating that I use - <a href="http://handlebarsjs.com/">Handlebars</a>.

First off I set up the two pages that I want. I then use one of the data attributes available to make a navbar at the bottom of the screen.

<code>

<div data-role="page" id="twitter">
   <header data-role="header">
         <h1>Ubelly</h1>
   </header>

   <div data-role="content">
      
   </div>

    <footer data-role="footer" data-theme="b">
         <div class="footer-nav" data-role="navbar">
            <ul>
               <li><a href="#articles" id="article-button" data-icon="custom">Articles</a></li>
               <li><a href="#twitter" id="twitter-button" data-icon="custom">Twitter</a></li>
            </ul>
         </div>
   </footer>

 </div>

 <div data-role="page" id="articles">

   <header data-role="header">
         <h1>Ubelly</h1>
   </header>

   <div data-role="content">
      
   </div>

   <footer data-role="footer" data-theme="b">
         <div class="footer-nav" data-role="navbar">
            <ul>
               <li><a href="#articles" id="article-button" data-icon="custom">Articles</a></li>
               <li><a href="#twitter" id="twitter-button" data-icon="custom">Twitter</a></li>
            </ul>
         </div>
   </footer>

 </div>

</code>

The data-role="navbar" creates a grid inside the container and allows for nice fluid blocks to be hold any sort of navigation you want. You are able to use the navbar as part of the header or footer, or even as an element in the content container. Both of the anchor tags have a data-icon set to custom, allowing me to use any icon I wish for it. By default the icon position is set to the top, which is fine for what I want, but you can easily change the position using data-iconpos attribute.

All the data that I get back from a request will be displayed in a list, so I need to create a UL with a data-role="listview". For the Twitter view I am going to use the option of having an image in the list item. This is acheived by have an image as the first element in the LI.

I am going to be using Handlebars to list out all the data, which is why you see the script tag inside the UL.

<code>
<ul class="tweets" data-role="listview">
   <script id="twitterTempl" type="text/x-handlebars-template">
      {{#each this}}
      <li>
         <img src="{{thumb}}" alt="{{author}}" height="80px" width="80px">
         <h3>{{author}}</h3>
         <p><a href="{{url}}">{{tweet}}</a></p>
      </li>
      {{/each}}   
   </script>
</ul>
</code>

I will use pretty much the same set-up for the Article list, but will also have a span with a class of ui-li-count which will style it as a small little counter (which displays the number of comments).

<code>
<ul class="articles" data-role="listview">
   <script id="articleTempl" type="text/x-handlebars-template">
      {{#each this}}
      <li>
         <h3><a href="{{link}}">{{title}}</a></h3>
         <span class="ui-li-count">{{count}}</span>
      </li>
      {{/each}}   
   </script>
</ul>
</code>

Now, onto the JS. I am using search.twitter.com and just returning JSON for the twitter feed and then using YQL for the RSS feed and again, just returning JSON.

The two functions are fired depending on what page is loaded using the pageinit event (jQuery Mobile version of document.ready).

<code>

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

</code>

And then some basic styles for the links and icons.

<code>
   
a{
   text-decoration:none;
   color: #ff3366;
}

/**** Footer Styles ****/

.footer-nav .ui-btn .ui-btn-inner { padding-top: 40px !important; }
.footer-nav .ui-btn .ui-icon { width: 30px!important; height: 30px!important; margin-left: -15px !important; box-shadow: none!important; -moz-box-shadow: none!important; -webkit-box-shadow: none!important; -webkit-border-radius: 0 !important; border-radius: 0 !important; }
#article-button .ui-icon { background:  url(../img/179-notepad.png) 50% 50% no-repeat; background-size: 24px 22px; }
#twitter-button .ui-icon { background:  url(../img/23-bird.png) 50% 50% no-repeat; background-size: 24px 16px;  }

</code>

Once thrown all together you should get something like the following.


<iframe src="http://www.screenr.com/embed/IeIs" width="650" height="396" frameborder="0"></iframe>

Now, as we have enabled it to be web app capable, when a user saves it to the home screen it will use the icon and the splash screen.

<iframe src="http://www.screenr.com/embed/NaIs" width="650" height="396" frameborder="0"></iframe>

As you can see when the user clicks on a tweet link or article link it takes them out of the app and opens the browser, taking them to the link. We could of course, keep them in the app and direct them to another page that could display everything.

Once done, you can have this as a web app or even venture on with <a href="http://phonegap.com/">Phonegap</a> to wrap up you app and distribute it on the various app stores. 

<hr>

You should now have enough knowledge to at least get cracking with jQuery mobile. I recommend taking a look at these books if you want to dive in a bit deeper with jQuery Mobile.

<a href="http://www.amazon.co.uk/jQuery-Mobile-First-Look-Giulio/dp/1849515905">jQuery Mobile, First Look</a>
<a href="http://www.amazon.co.uk/Pro-jQuery-Mobile-ebook/dp/B006JPPN3Y">Pro jQuery Mobile</a>

And of course the jQM <a href="http://jquerymobile.com/demos/1.0.1/">documentation</a> is alway a great place to start. 


The code for this basic app can be found on <a href="https://github.com/shaundunne/jqm-ubelly" title="Ubelly AppReader on Github" target="_blank">github</a> 