from django.shortcuts import render
from datetime import datetime
# Create your views here.
def home(request):
    currentYear = datetime.now().year
    return render(request,template_name="STAR/home.html",context={"year":currentYear,"page_name":"Home"})
