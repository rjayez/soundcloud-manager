import axios from "axios";
import {openNotificationWithIcon} from "../../utils";

export const listPlaylist = async () => {
    return await axios.get('http://localhost:1234/api/playlists')
        .then(response => {
            console.info(response);
            openNotificationWithIcon('success', 'Playlists à jour.', '');
            return response.data;
        }, error => {
            console.error(error);
            openNotificationWithIcon('error',
                'Erreur chargement playlist',
                'Le chargement de la liste des playlists à planter, faut appuyer sur le bouton de rafraichisement.')
        });
}


export const createPlaylist = async (weekNumber) => {
    return axios.post('http://localhost:1234/api/playlists/weekly/' + weekNumber)
        .then(response => {
            openNotificationWithIcon('success', 'Playlists créées !', '');
        }, error => {
            console.error(error);
            openNotificationWithIcon('error', 'Echec de la création', '');
        });
}