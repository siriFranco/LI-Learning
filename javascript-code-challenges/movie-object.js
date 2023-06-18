//Title, Director, Genre, Release Year, Rating

const shrekMovie = {
    title: "Shrek",
    director: "Andrew Adamson and Vicky Jenson",
    genre: "Animation, adventure and comedy",
    releaseYear: 2001,
    rating: 7.8
  };
  
console.log(shrekMovie);

console.log(`${shrekMovie.title}, an ${shrekMovie.genre} film directed by ${shrekMovie.director} was release in ${shrekMovie.releaseYear}. It received a rating of ${shrekMovie.rating} `);

//Otherwise
/* function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getOverview = function(){
    return `${this.title}, an ${this.genre} film directed by ${this.director} was release in ${this.releaseYear}. It received a rating of ${this.rating} `;
}; */

//Otherwhise improved
class Movie{
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview(){
        return `${this.title}, an ${this.genre} film directed by ${this.director} was release in ${this.releaseYear}. It received a rating of ${this.rating} `;
    }
}


const Spiderman = new Movie("Spiderman", "Sam Rami", "Action", 2002, 87);
const Batman = new Movie(
    "the Dark Knight",
    "Christopher Nolan",
    "Action",
    2008,
    83
);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());

// use a filter 

//filter otherwise
function movieType(Superman){

    const movieNode = document.querySelector("#Superman");
    const supermanLive = Superman.filter(
        (option) => option.liveAction == false
    );

    supermanLive.forEach(option =>{
        let liveAction = document.createElement('li');
        liveAction.textContent = option.name;
        movieNode.appendChild(liveAction);
    });

}

const Superman = [
    {
        name: "Man of steel",
        age: 2013,
        liveAction: true,
    },
    {
        name: "Reign of Supermen",
        age: 2019,
        liveAction: false,
    },
    {
        name: "Superman vs The Elite",
        age: 2012,
        liveAction: false,
    },
];

movieType(Superman);

// ----------------------------------------

class TechnicalMovie extends Movie {
    constructor(title, director, genre, releaseYear, rating, leadActor){
    super( title, director, genre, releaseYear, rating );
    this.leadActor = leadActor;
    }

    getLeadActor(){
        return `The current lead actor is ${this.leadActor}. `;
    }    
}

const ZackSnyderJusticeLeague = new TechnicalMovie(
    "Zack Snyder's Justice League",
    "Zack Snyder",
    "Action",
    2021,
    8,
    "Henry Cavill"

);

console.log(ZackSnyderJusticeLeague.releaseYear);
console.log(ZackSnyderJusticeLeague.getLeadActor());

