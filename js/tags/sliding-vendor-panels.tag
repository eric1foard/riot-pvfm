<sliding-vendor-panels>
    <section id="services" show={this.vendors}>

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div each="{this.vendors}" class="{this.class}">
                    <carousel-panel vendor={this}></carousel-panel>
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>


    </section>
    <script>
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
                // TODO
            }
        });
    });
    </script>
</sliding-vendor-panels>
