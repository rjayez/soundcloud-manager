from flask import Flask, jsonify, render_template
import SoundcloudService, SoundcloudPlaylistCreator
from SoundcloudService import client
from flask_cors import CORS


app = Flask(__name__, template_folder="../client/public", static_folder="../client/build/static")

CORS(app)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/me')
def me():
    print(client.get('/me'))
    return "zefouzef"

@app.route('/playlists')
def getPlaylist():
    playlistData = SoundcloudService.getPlaylist()
    return jsonify(playlistData)

@app.route('/playlists/weekly/<int:week_number>', methods = ['POST'])
def createWeeklyPlaylist(week_number):
    print(week_number)
    SoundcloudPlaylistCreator.createPlaylist(week_number)
#TODO renvoyer une 204 si la playlist est vide
    return 'success'


@app.route('/playlists/<int:id>', methods= {'DELETE'})
def deletePlaylist(id):
    SoundcloudService.deletePlaylist(id)

    return Flask.make_response('Success')

@app.route('/test')
def test():
    return SoundcloudService.testPlaylist()


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
