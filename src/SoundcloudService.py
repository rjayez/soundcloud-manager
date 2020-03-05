import soundcloud
from Config import config

client = soundcloud.Client(client_id=config.get('Soundcloud', 'clientid', fallback='Vide'),
                           client_secret=config.get('Soundcloud', 'clientsecret', fallback='Vide'),
                           username=config.get('Soundcloud', 'username', fallback='Vide'),
                           password=config.get('Soundcloud', 'password', fallback='Vide'))

def getPlaylist():
    playlists = client.get('me/playlists')
    data = []
    for playlist in playlists:
        data.append(getPlaylistData(playlist))

    return data



def getPlaylistData(playlist):

    data = {"titre": playlist.title,
            "url_image": playlist.artwork_url,
            "uri" : playlist.uri,
            "nb" : len(playlist.tracks),
            "key" : playlist.id
            }
    return data

def deletePlaylist(playlistId):
    response = client.delete('me/playlists/' + str(playlistId))
    print(response)


def testPlaylist():
    activities = client.get('/me/activities')
    print(activities)
    return ''




