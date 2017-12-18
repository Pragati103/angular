import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  private goals=new BehaviorSubject<any>(['the initial goals','another goals']);
 goal=this.goals.asObservable();

 changeGoal(goal){
   this.goals.next(goal);
 }

  constructor() { }

}
