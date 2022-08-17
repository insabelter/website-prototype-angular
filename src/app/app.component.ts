import { Component, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'website-prototype-angular';
  tags: String[] = ['Mehl', 'Eier', 'Birnen'];

  sortTags() {
    var sortedTags = [...new Set(this.tags)].sort();
    return sortedTags;
  }
}
