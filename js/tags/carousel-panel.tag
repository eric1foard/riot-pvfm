<carousel-panel>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 text-center">
                <img src={this.image}/>
            </div>
            <div class="col-lg-6">
                <h2 class="section-heading">{this.name}</h2>
                <hr class="light">
                <ul>
                    <li each={vendor, i in this.vendors}>{vendor}</li>
                </ul>
            </div>
        </div>
    </div>
</carousel-panel>
