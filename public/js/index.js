// import * as desserts from './desserts.js';
// import * as food from './food.js';
// import * as drinks from './drinks.js';


$(document).ready(function() {
    $.get("/food/data", function(data){
        data.forEach(function(item) {
            $("#food").append(`
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5>${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">${item.price}</p>
                     </div>
                </div>
            </div>
            `);
        });
    })
});

$(document).ready(function() {
    $.get("/drinks/data", function(data){
        data.forEach(function(item) {
            $("#drinks").append(`
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5>${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">${item.price}</p>
                     </div>
                </div>
            </div>

            `);
        });
    })
});

$(document).ready(function() {
    $.get("/desserts/data", function(data){
        data.forEach(function(item) {
            $("#desserts").append(`
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5>${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">${item.price}</p>
                     </div>
                </div>
            </div>

            `);
        });
    })
});