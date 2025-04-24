from rest_framework import serializers
from django.contrib.auth import get_user_model

CustomUser = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'password']

    def create(self, validated_data):
        # Cria o usuário com senha criptografada
        user = CustomUser.objects.create_user(**validated_data)
        return user
