import {Pipe,PipeTransform} from '@angular/core';
import {IFlower} from './flower';

@Pipe({
  name:'flowerFilter'
})
export class FlowerFilterPipe implements PipeTransform{
  transform(value:IFlower[],filterBy: string):IFlower[]{
    filterBy=filterBy ? filterBy.toLocaleLowerCase():null;
    return filterBy ? value.filter((flower:IFlower)=>
    flower.Institution.toLocaleLowerCase().indexOf(filterBy)!==-1): value;
  }
}
