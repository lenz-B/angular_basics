import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { IsEvenPipe } from './is-even.pipe';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, IsEvenPipe, FormsModule, UserProfileComponent,
    CommonModule, CountryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_basics';
  checked:boolean = false
  count = 0
  newTask: string = ''
  tasks: string[] = []

  addTask(){
    if(this.newTask.trim()){
      this.tasks.push(this.newTask.trim())
      this.newTask = ''
    }
  }

  deleteTask(i: number){
    this.tasks.splice(i, 1)
  }

  buttonClicked():any{
    console.log('clicked');
    this.checked = !this.checked
  }

  inc(){
    this.count++
  }
  dec(){
    this.count--
  }
  reset(){
    this.count = 0
  }

}
