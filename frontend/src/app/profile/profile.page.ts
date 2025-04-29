import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonSpinner,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSpinner,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    HttpClientModule,
  ],
})
export class ProfilePage implements OnInit {
  profile: any = null;
  isOwnProfile: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.loadProfile(username);
    } else {
      this.isOwnProfile = true;
      this.loadProfile();
    }
  }

  loadProfile(username?: string) {
    const endpoint = username
      ? `${environment.apiUrl}/api/users/profile/${username}/`
      : `${environment.apiUrl}/api/users/profile/`;

    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No authentication token found.');
      this.router.navigate(['/login']); 
      return;
    }

    const headers = { Authorization: `Token ${token}` };

    this.http.get(endpoint, { headers }).subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: (err) => {
        console.error('Error loading profile:', err);
        if (err.status === 403) {
          this.router.navigate(['/login']); 
        }
      },
    });
  }
}
