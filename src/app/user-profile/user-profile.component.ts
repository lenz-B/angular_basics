import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  name: string = 'Muhammed Labeeb'
  age: number = 20
  email: string = 'mlabeeb707@gmail.com'
  username: string = ''
  color: string = 'yellow'
  isLoggedIn: boolean = false
  fruits: string[] = []
  search: string = ''

  constructor(private dataService: DataService){}

  add(){
    this.age++
  }

  greetMe(){
    alert (`Hello, ${this.username}`)
  }

  ngOnInit(): void {
      this.fruits = this.dataService.getData()
  }

  get filter(){
    return this.fruits.filter(frt => frt.toLowerCase().includes(this.search.toLowerCase()))
  }
}
