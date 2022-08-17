import { Component, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'website-prototype-angular';
  groceries: String[] = ['Mehl', 'Eier', 'Birnen', 'Mehl'];

  sortGroceries() {
    var sortedGroceries = [...new Set(this.groceries)].sort();
    return sortedGroceries;
  }
}
