from django.urls import path
from .views import listAllTasks, changeStatus, removeTask, addTask
app_name = 'todo_app'

urlpatterns = [
    path('tasks-list/', listAllTasks),
    path('change-status/', changeStatus),
    path('remove-task/', removeTask),
    path('add-task/', addTask),
    ]