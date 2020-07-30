from flask import Flask, jsonify, render_template
import SoundcloudPlaylistCreator
import SoundcloudService
from SoundcloudService import client

app = Flask(__name__)


# @app.route('/')
# def index():
#     return app.send_static_file('/client/src/index.js')


#@app.route('/me')
def me():
    values = client.get('/me')
    print(values)
    return jsonify(values)
    # return Flask.make_response("Success",)


@app.route('/playlists')
def getPlaylist():
     playlistData = SoundcloudService.getPlaylist()
     return jsonify(playlistData)
    # return "truc"

@app.route('/playlists/weekly/<int:week_number>', methods=['POST'])
def createWeeklyPlaylist(week_number):
    print(week_number)
    SoundcloudPlaylistCreator.createPlaylist(week_number)
    # TODO renvoyer une 204 si la playlist est vide
    return 'success'



@app.route('/test')
def test():
    # return SoundcloudService.testPlaylist()
    return ""


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
