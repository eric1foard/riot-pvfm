riot.tag2('contact-us', '<section id="contact"> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2 text-center"> <h2 class="section-heading">Contact Us</h2> <hr class="primary"> <p>Email us if you\'d like to inquire about joining the market as a vendor or have other questions. Like us on Facebook!</p> </div> <div class="col-lg-4 col-lg-offset-2 text-center"> <a href="mailto:foard265@gmail.com"> <img src="img/mail.png"> </a> </div> </br> <div class="col-lg-4 text-center"> <a href="https://www.facebook.com/PortolaValleyFarmersMarket?fref=ts"> <img src="img/facebook.png"> </a> </div> </div> </div> </section>', '', '', function(opts) {
});

riot.tag2('featured-vendor', '<section class="bg-primary" id="about"> <div class="container"> <div class="row"> <div class="col-lg-6 text-center"> <h2 class="section-heading">Featured Vendor</h2> <hr class="light"> <p class="text-faded">Jim Adams is a long-time La Honda resident. Recently retired from his work as a talented fine wood-worker, Jim spends his time sharpening knives, gardening tools, and other implements. If it ever held an edge, Jim can sharpen it! Bring your kitchen knives (or anything else, sawblades excepted) to market and Jim will return them to you the following week.</p> </div> <div class="col-lg-6 text-center"> <iframe id="video" width="420" height="315" frameborder="0" src="https://www.youtube.com/v/R-umlLb0H7Y&amp;feature=youtu.be"> </iframe> </div> </div> </div> </section>', '', '', function(opts) {
});

riot.tag2('find-us-map', '<section class="no-padding" id="portfolio"> <div id="leafletMap"> </div> </section>', '', '', function(opts) {
    this.on('mount', function() {
        var map = L.map('leafletMap', {
            center: [37.382468, -122.228823],
            zoom: 15,
            scrollWheelZoom: false
        });
        L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            detectRetina: true
        }).addTo(map);

        L.marker([37.382468, -122.228823]).addTo(map);
    });
});

riot.tag2('navigation', '<nav id="mainNav" class="navbar navbar-default navbar-fixed-top"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand page-scroll" href="#page-top">PVFM</a> </div> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav navbar-right"> <li> <a class="page-scroll" href="#about">Featured</a> </li> <li> <a class="page-scroll" href="#services">Vendors</a> </li> <li> <a class="page-scroll" href="#portfolio">Map</a> </li> <li> <a class="page-scroll" href="#contact">Contact</a> </li> </ul> </div> </div> </nav>', '', '', function(opts) {
});

riot.tag2('sliding-vendor-panels', '<section id="services"> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <h2 class="section-heading">At Your Service</h2> <hr class="primary"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-3 col-md-6 text-center"> <div class="service-box"> <i class="fa fa-4x fa-diamond wow bounceIn text-primary"></i> <h3>Sturdy Templates</h3> <p class="text-muted">Our templates are updated regularly so they don\'t break.</p> </div> </div> <div class="col-lg-3 col-md-6 text-center"> <div class="service-box"> <i class="fa fa-4x fa-paper-plane wow bounceIn text-primary" data-wow-delay=".1s"></i> <h3>Ready to Ship</h3> <p class="text-muted">You can use this theme as is, or you can make changes!</p> </div> </div> <div class="col-lg-3 col-md-6 text-center"> <div class="service-box"> <i class="fa fa-4x fa-newspaper-o wow bounceIn text-primary" data-wow-delay=".2s"></i> <h3>Up to Date</h3> <p class="text-muted">We update dependencies to keep things fresh.</p> </div> </div> <div class="col-lg-3 col-md-6 text-center"> <div class="service-box"> <i class="fa fa-4x fa-heart wow bounceIn text-primary" data-wow-delay=".3s"></i> <h3>Made with Love</h3> <p class="text-muted">You have to make your websites with love these days!</p> </div> </div> </div> </div> </section>', '', '', function(opts) {
});

riot.tag2('test', '<h1>HEY THERE THIS IS A BIG OL\' TEST</h1>', '', '', function(opts) {
});

riot.tag2('welcome', '<header> <div class="header-content"> <div class="header-content-inner"> <h1>Portola Valley Farmers\' Market</h1> <hr> <h3>2-6pm</h3> <h3>765 Portola Road, Portola Valley</h3> <h3>At Town Center, in front of the Historic Schoolhouse</h3><br> </div> </div> </header>', '', '', function(opts) {
});
