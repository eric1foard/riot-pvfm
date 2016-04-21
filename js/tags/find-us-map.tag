<find-us-map>
    <section class="no-padding" id="portfolio">
        <div id="leafletMap">

        </div>
    </section>

    <script>
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
    </script>
</find-us-map>
