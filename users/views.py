from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model
from django.contrib import messages
from .serializers import RegisterSerializer

CustomUser = get_user_model()

def register_view(request):
    if request.method == 'POST':
        # Obtém os dados do formulário
        username = request.POST.get('username')
        password = request.POST.get('password')
        data = {'username': username, 'password': password}

        # Valida os dados usando o serializer
        serializer = RegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            messages.success(request, 'Usuário criado com sucesso!')
            return redirect('register')  # Redireciona para a mesma página após o registro
        else:
            # Exibe os erros de validação
            for error in serializer.errors.values():
                messages.error(request, error[0])

    return render(request, 'users/register.html')
