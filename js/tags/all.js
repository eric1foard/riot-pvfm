riot.tag2('carousel-panel', '<div class="container"> <div class="row"> <div class="col-lg-6 text-center"> <img riot-src="{this.image}"> </div> <div class="col-lg-6"> <h2 class="section-heading">{this.name}</h2> <hr class="light"> <ul> <li each="{vendor, i in this.vendors}">{vendor}</li> </ul> </div> </div> </div>', '', '', function(opts) {
});

riot.tag2('contact-us', '<section id="contact"> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2 text-center"> <h2 class="section-heading">Contact Us</h2> <hr class="primary"> <p>Email us if you\'d like to inquire about joining the market as a vendor or have other questions. Like us on Facebook!</p> </div> <div class="col-lg-4 col-lg-offset-2 text-center"> <a href="mailto:maggiefoard@mac.com"> <img src="img/mail.png"> </a> </div> </br> <div class="col-lg-4 text-center"> <a href="https://www.facebook.com/PortolaValleyFarmersMarket?fref=ts"> <img src="img/facebook.png"> </a> </div> </div> </div> </section>', '', '', function(opts) {
});

riot.tag2('featured-vendor', '<section class="bg-primary" id="about"> <div class="container"> <div class="row"> <div class="col-lg-6 text-center"> <h2 class="section-heading">Featured Vendor</h2> <hr class="light"> <p class="text-faded"> Windy Hill Eggery is inspired by a love of good food, being outside, and farmers\' markets. Pasture raised, organic feed, corn and soy free. Lucy and Devon are excited to share these eggs with their neighbors at the PV Farmers’ market, and with the East Palo Alto Farmers’ Market, where people have very little access to farm fresh eggs.</p> </div> <div class="col-lg-6 text-center"> <img src="../../img/egg-basket.jpeg" height="400px" alt="Sunrise Farms Fruit"> </div> </div> </div> </section>', '', '', function(opts) {
});

riot.tag2('find-us-map', '<section class="no-padding" id="portfolio"> <div id="leafletMap"> </div> </section>', '', '', function(opts) {
    this.on('mount', function() {
      L.Icon.Default.imagePath = './images';
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

riot.tag2('sliding-vendor-panels', '<section id="services" show="{this.vendors}"> <div id="myCarousel" class="carousel slide" data-ride="carousel"> <div class="carousel-inner" role="listbox"> <div each="{this.vendors}" class="{this.class}"> <carousel-panel vendor="{this}"></carousel-panel> </div> </div> <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div> </section>', '', '', function(opts) {
    this.on('mount', function() {
        var that = this;
        $.ajax({
            url: 'json/static-vendors.json',
            success: function(result) {
                if (result.length > 0) {
                    result = result.map(function(elt) {
                        elt.class = 'item';
                        return elt;
                    });
                    result[0].class = 'item active';
                    that.vendors = result;
                }
                that.update()
            },
            error: function(result) {

            }
        });
    });
});

riot.tag2('test', '<h1>HEY THERE THIS IS A BIG OL\' TEST</h1>', '', '', function(opts) {
});

riot.tag2('welcome', '<header> <div class="header-content"> <div class="header-content-inner"> <h1>Portola Valley Farmers\' Market</h1> <hr> <h3>2-6pm</h3> <h3>765 Portola Road, Portola Valley</h3> <h3>At Town Center, in front of the Historic Schoolhouse</h3> <h3>shorter winter hours begin when the clocks "falls back"</h3> <h3>(November 10th through March 9th, market hours are 2-5pm)</h3> </div> </div> </header>', '', '', function(opts) {
});
