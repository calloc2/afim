from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth.models import User

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, username=None):
        if username:
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            user = request.user

        profile_data = {
            "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "date_joined": user.date_joined,
            "bio": user.profile.bio if hasattr(user, 'profile') else None,
        }
        return Response(profile_data, status=status.HTTP_200_OK)