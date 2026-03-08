import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html'
})
export class StarComponent {

  pressCount: number = 0;
  hideStar:boolean = true;

  countPresses(){
    this.pressCount++;
    console.log(this.pressCount);
  }

  lookStar(){
    this.hideStar = !this.hideStar;
    /*
    if(this.hideStar) {
      this.hideStar = false;
    }
    else{
      this.hideStar = true;
    }
    */
  }

}
