from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    """
    One user can have many tasks
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE) # When the referenced object(User) is deleted, also delete the objects that have references to it
    task = models.TextField()
    isComplete = models.BooleanField(default=False, blank=True) # blank=True -> the field is allowed to be blank. Default is False
    
    def __str__(self):
        return f"{self.user.username} task "
