from django.contrib import admin
from users.models import User
from users.models import ExtendAuthorModel

admin.site.register(User)
admin.site.register(ExtendAuthorModel)
# Register your models here.
