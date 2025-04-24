from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.contrib.auth import get_user_model

CustomUser = get_user_model()  # Obtém o modelo de usuário personalizado

class RegisterUserTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.valid_payload = {
            "username": "testuser",
            "password": "testpassword"
        }

    def test_register_user(self):
        # Envia uma requisição POST para o endpoint de registro
        response = self.client.post('/api/users/register/', self.valid_payload, format='json')
        
        # Verifica se o status da resposta é 201 CREATED
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['message'], 'Usuário criado com sucesso')
        
        # Verifica se o usuário foi criado no banco de dados
        user_exists = CustomUser.objects.filter(username="testuser").exists()
        self.assertTrue(user_exists)
