let data;
let mainData;
let selectedData;

let x = 10;
let y = 10;
let offset = 300;

let artistsOccurrence = {};
let neighborhoods = {};

let balls = [];


class Ball{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.size = 10;
        this.diameter = radius;
    }
}

//https://data.sfgov.org/api/v3/views/wg8w-68vc/query.json

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://data.sfgov.org/resource/wg8w-68vc.json", {
        method: 'GET',
    })
    .then(response => { return response.json()})
    .then(resp => {data = resp;});
})

function setup(){
    createCanvas(700, 700);
}

function card(mural){
    fill(0, 255, 255);

    text(`Artist: ${mural.artist}`, width/2 - offset, 80);
    text(`Mural Year: ${mural.year}`, width/2 - offset, 110);
    text(`${mural["street_address"]}, ${mural["zip_code"]}`, width/2 - offset, 150);
    text(`${mural.city}, ${mural.state}`, width/2 - offset, 180);
    text(`# of Districts: ${mural["number_of_districts"]}`, width/2 - offset, 210);
    text(`Neighborhood: ${mural["analysis_neighborhood"]}`, width/2 - offset, 240);
    text(`Cultural Districts: ${mural["cultural_districts"] ? mural["cultural_districts"] : 'none'}`, width/2 - offset, 270);
    text(`Supervisor District: ${mural["supervisor_district"]}`, width/2 - offset, 300);

}

function neighborhoodCard(neigh){
    fill(0, 255, 255);


}

function outputBalls(){
    fill(255, 255, 255);
    for(let i =0; i < balls.length; i++){
        circle(balls[i].x, balls[i].y, balls[i].diameter);
    }
}

function draw(){
    background(0);
    fill(255, 255, 255);
    text("Press spacebar to get a random Mural", width/2 - 100, 40);

    fill(0, 255, 255);
    
    if(data && selectedData !== undefined ){        
        card(selectedData);        

        // text(`Artists Occurrence: ${artistsOccurrence[]}`, width - 200, 50);
        // console.log(artistsOccurrence);
        // const artistsArray = Object.values(artistsOccurrence);
        // console.log(artistsArray)
        if(balls.length > 0) {
            outputBalls();
        }
    }
}

function keyPressed(){
    if(key === " "){
        selectedData = '';
        let randomNum = Math.floor(random(data.length));

        selectedData = data[randomNum];

        if(selectedData["analysis_neighborhood"] in neighborhoods){
            balls.push(new Ball(random(0, 700), random(0, 700), 10))
            neighborhoods[selectedData["analysis_neighborhood"]] += 1;
        } else{
            neighborhoods[selectedData["analysis_neighborhood"]] = 1;
        }

        // if(selectedData.artist in artistsOccurrence){
        //     artistsOccurrence[selectedData.artist] += 1;
        //     artistsOccurrence[selectedData.analysis_neighborhood] += 1;
        // } else {
        //     artistsOccurrence[selectedData.artist] = 1;
        //     artistsOccurrence[selectedData.analysis_neighborhood] = 1;
        // }
        

        console.log(neighborhoods);

    }
}