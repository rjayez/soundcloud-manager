import axios from "axios";
import {openNotificationWithIcon} from "../../../utils";


export const deletePlaylist = async (playlistId) => {
    console.log('playlist id : ' + playlistId)
    return await axios.delete('http://localhost:3000/playlists/' + playlistId)
        .then(response => {
            openNotificationWithIcon('success', 'Playlists supprimer.', '');
        }, error => {
            console.error(error);
            openNotificationWithIcon('error',
                'Erreur chargement playlist',
                'Le chargement de la liste des playlists à planter, faut appuyer sur le bouton de rafraichisement.');
        })
}