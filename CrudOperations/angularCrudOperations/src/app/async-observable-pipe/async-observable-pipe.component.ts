import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-async-observable-pipe',
  templateUrl: './async-observable-pipe.component.html',
  styleUrls: ['./async-observable-pipe.component.css']
})
export class AsyncObservablePipeComponent implements OnInit {

  time = new Observable<string>((observer : Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  })
  constructor() { }

  ngOnInit() {
  }



}
