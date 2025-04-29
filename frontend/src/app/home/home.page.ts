import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSearchbar, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSearchbar, IonButtons, IonIcon],
})
export class HomePage {
  constructor() {}

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    console.log('Search query:', query);
    // Add logic to filter or search listings based on the query
  }
}
