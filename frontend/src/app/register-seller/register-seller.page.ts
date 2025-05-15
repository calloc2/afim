import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';
import { IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.page.html',
  styleUrls: ['./register-seller.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonSearchbar,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonButton
  ]
})
export class RegisterSellerPage implements OnInit {
  sellerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.sellerForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
    });
  }

  onSubmit(): void {
    if (this.sellerForm.valid) {
      console.log('Dados do vendedor:', this.sellerForm.value);
      // Enviar para o backend ou serviço Firebase aqui
    }
  }
}
