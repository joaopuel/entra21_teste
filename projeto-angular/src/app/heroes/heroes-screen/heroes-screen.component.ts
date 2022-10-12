import { Component, OnInit } from '@angular/core';

export type Hero = {
  id?: number,
  heroName: string,
  secretIdentity?: string,
  universe: "Marvel" | "DC",
  deceased?: boolean,
  photo: string
}

@Component({
  selector: 'app-heroes-screen',
  templateUrl: './heroes-screen.component.html',
  styleUrls: ['./heroes-screen.component.css']
})
export class HeroesScreenComponent implements OnInit {

  _editingHero: Hero | null | undefined = null;

  heroes: Hero[] = [
    {
      id: 1,
      heroName: "Iron Man",
      secretIdentity: "Tony Stark",
      universe: "Marvel",
      deceased: true,
      photo: "https://www.pngitem.com/pimgs/m/501-5015090_ironman-helmet-png-image-iron-man-face-png.png"
    },
    {
      id: 2,
      heroName: "Batman",
      secretIdentity: "Bruce Wayne",
      universe: "DC",
      photo: "https://i.pinimg.com/originals/bf/c6/c3/bfc6c334925f11b3b71f1f455c38f368.jpg"
    },
    {
      id: 3,
      heroName: "Superman",
      secretIdentity: "Clark Kent",
      universe: "DC",
      photo: "https://i.pinimg.com/originals/f4/57/aa/f457aad312bccba9aee58eeadd7cebe9.jpg"
    },
    {
      id: 4,
      heroName: "Thor",
      universe: "Marvel",
      photo: "data:image/jpeg;base64,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"
    }
  ]

  inserting = false;

  constructor() { }

  ngOnInit(): void {
  }

  inserirHeroi = () => {
    this.inserting = true;
  }

  save = (hero: Hero) => {
    if(hero.id == null){
      hero.id = (
        this.heroes.length > 0 ?
        this.heroes.map((h: Hero) => h.id!)
        .sort()[this.heroes.length-1] : 0)+1;
        this.heroes.push(hero)
    } else {
      let pos = this.heroes.findIndex((h: Hero) => h.id! == hero.id!)
      this.heroes[pos] = hero;
    }
  }

  remove = (hero: Hero) => {
    this.heroes = this.heroes.filter((h: Hero) => h.id! != hero.id);
  }

  edit = (heroID: number) => {
    this._editingHero = this.heroes.find((h: Hero) => h.id! == heroID!);
    this.inserting = true;
  }

}
