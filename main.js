console.log("hi");

let data;
let mainData;
let selectedData;

let x = 10;
let y = 10;
let offset = 50;


//https://data.sfgov.org/api/v3/views/wg8w-68vc/query.json

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://data.sfgov.org/resource/wg8w-68vc.json", {
        method: 'GET',
    })
    .then(response => { return response.json()})
    .then(resp => {
        data = resp;
        console.log(data);
    });
    // console.log(data);
})

function setup(){
    createCanvas(700, 700);
    let heading = createElement('h2', "Get a random Mural");
    heading.style("color", "white");
    heading.position(width/2, 60);
}

function card(mural){
    background(0);
    fill(0, 255, 255);
    // let street = createElement('p', mural["street_address"]);
    // let city = createElement('p', mural.city);
    // let state = createElement('p', mural.state);
    // let zip = createElement('p', mural["zip_code"]);
    // let artist = createElement('h2', mural.artist );
    // let year = createElement('h3', mural.year);
    let numOfDistricts;
    let culturalDistricts;
    let supervisorDistrict;
    let neighborhood;

    text(mural.artist, width/2 - offset, 80);
    text(mural.year, width/2 - offset, 110);
    text(`${mural["street_address"]}, ${mural["zip_code"]}`, width/2 - offset, 150);
    text(`${mural.city}, ${mural.state}`, width/2 - offset, 180);

    // artist.position(width/2, 80);
    // artist.style("color", "white");

}

function draw(){
    // clear();
    background(0);
    fill(0, 255, 255);
    if(data && selectedData !== undefined ){
        console.log(selectedData);
        
        card(selectedData);
        // data.map(mural => {
        //     const long = mural.the_geom.coordinates[0];
        //     const lat = mural.the_geom.coordinates[1];
            
        // })

        // console.log(data);

        // for(let i = 0; i < data.length; i++) {
        //     const long = data[i].the_geom.coordinates[0];
        //     const lat = data[i].the_geom.coordinates[1];

        //     console.log(long + 500, lat + 500);
            
        //     ellipse(long + 500, lat+ 500, x, y);
        // }

        
    }
}

function keyPressed(){
    
    if(key === "r"){
        selectedData = '';
        let randomNum = Math.floor(random(data.length));

        selectedData = data[randomNum];
    }
}