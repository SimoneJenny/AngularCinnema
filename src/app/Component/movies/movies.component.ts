import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movie';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from 'src/app/model/genre';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  MovieId: any;
  Tittle: any;
  Description: string;
  ReleaseDateTime: Date;
  Runtime: string;
  Rating: string;
  MainActors: string;
  Theater: string;
  Genrenumber: any;

  moviegenre: any[];
  movie: movie[];
  genres: Genre[];

  constructor(private service: HttpService) { }
  moviedropdown;
  moviedata:Array<movie>=[
    {MovieId:1, Tittle: "Supermand 2",Description: "Supermand 2 description",ReleaseDateTime:"04-04-2021",Runtime: "4h",Rating:"4 stjerner",MainActors:"øøh supermand",Theater:"Cinnema",Genrenumber: "Thriller"},
    {MovieId:2, Tittle: "Frozen", Description: "Frozen description", ReleaseDateTime:"01-09-2019", Runtime: "1h 45m",Rating:"3 stjerner", MainActors:"stemmer til roller", Theater:"Cinnema", Genrenumber: "child"},
    {MovieId:3, Tittle: "OP", Description:" OP description", ReleaseDateTime:"09-04-2019", Runtime: "1h 30m",Rating:"1 stjerner", MainActors:"stemmer til roller", Theater:"Cinnema", Genrenumber: "Child"},
    {MovieId:4, Tittle: "Supermand 3", Description: "Supermand 3 description", ReleaseDateTime: "04-04-2021", Runtime: "4h",Rating:"8 stjerner", MainActors:"øøh supermand", Theater:"Cinnema", Genrenumber: "Thriller"},
    {MovieId:5, Tittle: "THE BOY II", Description: "The Boy II (The Boy 2) er fortsættelsen til The Boy, hvor en barnepige får sig en gedigen forskrækkelse, da hun opdager, at familiens 8-årige dreng faktisk er en dukke.", ReleaseDateTime: "16-04 2020", Runtime: "1h 26 min",Rating:"2 stjerner", MainActors:"en dukke", Theater:"Cinnema", Genrenumber: "Gyser,Thriller"},
    {MovieId:6, Tittle: "the gentlemen", Description: "Gangsterfilmen 'The Gentlemen' handler om narkokongen Mickey Pearson, der ønsker at skille sig af med sit marihuanaimperium.", ReleaseDateTime: "27-02 2020", Runtime: "1 h 53 minutter",Rating:"3 stjerner", MainActors:"Mickey Pearson,Ray,Hugh Grant ", Theater:"Cinnema", Genrenumber: "Action"},
    {MovieId:7, Tittle: "LIKE A BOSS", Description: "Komedien 'Like a Boss' handler om to veninder, som beslutter sig for at starte et firma i fællesskab.", ReleaseDateTime: "07-05 2020", Runtime: "1h, 23 m",Rating:"8 stjerner", MainActors:"øøh supermand", Theater:"Cinnema", Genrenumber: "komdie"},
    {MovieId:8, Tittle: "JURASSIC WORLD 3", Description: "Plottet er hidtil ukendt, men på rollelisten er igen Chris Pratt og Bryce Dallas Howard. Hovedrollerne fra Steven Spielbergs Jurassic Park", ReleaseDateTime: "10-06 2021", Runtime: "4h",Rating:"ukendt stjerner", MainActors:"øøh supermand", Theater:"Cinnema", Genrenumber: "action,adventure, scienfiction"},
    {MovieId:9, Tittle: "TOP GUN 2: MAVERICK", Description: "Maverick tager den unge Bradley, søn af hans gamle partner Goose, under sine vinger..", ReleaseDateTime: "16-07 2020", Runtime: "1 h 53 minutter",Rating:"3 stjerner", MainActors:"Mickey Pearson,Ray,Hugh Grant ", Theater:"Cinnema", Genrenumber: "Action"},
    {MovieId:10, Tittle: "BAD BOYS FOR LIFE", Description: "Bad Boys For Life' må duoen dog atter gå sammen, da en brutal skurk har udset sig Mike som offer for sin plan", ReleaseDateTime: "07-05 2020", Runtime: "2h 3m",Rating:"ukendt stjerner", MainActors:"Will Smith,Martin Lawrence", Theater:"Cinnema", Genrenumber: "action, komedie, thriller"},
    {MovieId:11, Tittle: "SONIC THE HEDGEHOG", Description: "Sonic er lige kommet til Jorden fra en fjern verden, da han møder den lokale politimand Tom.", ReleaseDateTime: "13-02 2020", Runtime: "1h 40 min",Rating:"ukendt stjerner", MainActors:"Jim Carrey,James Marsden", Theater:"Cinnema", Genrenumber: "animation, adventure"}

  ];


  ngOnInit(): void {

  this.service.getMovie().subscribe(arg => this.movie = arg);
  this.service.getgenre().subscribe(arg => this.genres = arg);

  }

    //get
    getMovie(){
      alert("søger")
    }

    //post/add
    postMovie(){
      alert('added')

      //opretter simpelt array
       let gArray: any = [{
         "genreId":1
       }];
      const movietoadd={
        Tittle: this.Tittle,
        Description: this.Description,
        ReleaseDateTime: this.ReleaseDateTime,
        Runtime: this.Runtime,
        Rating: this.Rating,
        MainActors: this.MainActors,
        Theater: this.Theater,
        Genrenumber: this.Genrenumber,
        // moviegenre: gArray
      }
      this.service.postMovie(movietoadd).subscribe(
        (movietoadded) => {this.movie.push(movietoadded)}
      );
    }

    //delete
    deleteMovie(){

    }
    //put/update
    putMovie(){

    }
    selected(){
      console.log(this.moviedropdown)
    }


}
