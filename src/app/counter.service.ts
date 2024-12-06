import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = new BehaviorSubject<number>(0)

  constructor() { }

  getCount(): Observable<number>{
    return this.count.asObservable()
  }

  increment(){
    this.count.next(this.count.value + 1)
  }

  decrement(){
    this.count.next(this.count.value - 1)
  }

  reset(){
    this.count.next(0)
  }
}
