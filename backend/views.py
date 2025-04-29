from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from users.models import UserProfile

class RegisterUserView(APIView):
    def post(self, request):
        data = request.data
        try:
            user = User.objects.create(
                username=data['username'],
                first_name=data.get('first_name', ''),
                last_name=data.get('last_name', ''),
                email=data['email'],
                password=make_password(data['password']),
            )
            user.profile.bio = data.get('bio', '')
            user.profile.save()

            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)