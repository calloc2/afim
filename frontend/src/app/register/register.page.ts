import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel, AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,  
    HttpClientModule, 
    IonHeader,    
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  ],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.post(`${environment.apiUrl}/api/login/`, {
      username: this.username,
      password: this.password,
    }).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']); 
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Invalid username or password');
      },
    });
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {}

  async onRegister() {
    if (this.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'As senhas não coincidem.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const data = {
      username: this.username,
      password: this.password,
    };

    this.http.post('http://127.0.0.1:8000/api/users/register/', data).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Sucesso',
          message: 'Usuário registrado com sucesso!',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['/login']); // Redireciona para a página de login
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Erro',
          message: 'Ocorreu um erro ao registrar o usuário.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}
