import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = `${environment.apiUrl}/api/users/profile/`;

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get(this.apiUrl);
  }

  updateProfile(data: any) {
    return this.http.put(this.apiUrl, data);
  }
}
