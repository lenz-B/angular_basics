import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyCustomDirective } from '../my-custom.directive';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MyCustomDirective],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  countries: string[] = [
    'India', 'United States', 'Canada', 'Australia', 'Germany', 
    'France', 'Brazil', 'China', 'Japan', 'Russia', 
    'South Africa', 'United Kingdom', 'Mexico', 'Italy', 'Spain'
  ]

  searchTerm: string = ''

  get result() {
    return this.countries.filter(country => 
      country.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

}
