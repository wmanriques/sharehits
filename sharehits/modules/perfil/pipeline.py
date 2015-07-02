from .models import UserProfile


def get_profile_picture(backend, user, response, is_new=False, *args, **kwargs):
    img_url = None
    if backend.name == 'facebook':
        img_url = 'http://graph.facebook.com/%s/picture?type=large' % response['id']
    
    profile = UserProfile.objects.get_or_create(user = user)[0]
    profile.photo = img_url
    profile.save()