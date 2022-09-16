from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..models import Todo
from .serializer import TodoSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listAllTasks(request):
    tasks_list = Todo.objects.filter(user=request.user.id)
    tasks_list_serializer = TodoSerializer(tasks_list, many=True) #TODO: For a list method you should use many=True parameter when you're creating a new serializer instance
    return Response(tasks_list_serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def changeStatus(request):
    # Change the task status -> Complete or not Complete
    task = get_object_or_404(Todo, id=request.data['id'], user=request.user.id)
    if task.isComplete:
        task.isComplete = False
    else:
        task.isComplete = True
    task.save()
    return Response()

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def removeTask(request):
    # Remove a task
    task = get_object_or_404(Todo, id=request.data['id'], user=request.user.id)
    task.delete()
    return Response()


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addTask(request):
    # Add a new task
    new_task = Todo(user=request.user, task=request.data['task'])
    new_task.save()
    return Response({'new task has created successfuly'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def clearAllCompletedTasks(request):
    completed_tasks = Todo.objects.filter(isComplete=True, user=request.user.id)
    if completed_tasks:
        completed_tasks.delete()
        return Response('all completed tasks has been deleted successfully')
    return Response('There are no completed tasks.')
