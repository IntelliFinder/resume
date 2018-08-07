import { Component,OnChanges,Input} from '@angular/core';

@Component({
  selector: 'fs-star',
  moduleId:module.id,
  templateUrl: `star.component.html`,
  styleUrls:['star.component.css']
})
export class StarComponent implements OnChanges {
  //Orly - note this is the way a container components updates a nested component
  @Input() rating:number;
  starWidth:number;
  ngOnChanges():void{
    //Orly - The width of the visible window is changed according to rating
    this.starWidth = this.rating *86/5;
  }
 }
