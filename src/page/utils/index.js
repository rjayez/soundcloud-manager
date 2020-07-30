import React from "react";
import DeletePlaylistButton from "../DeletePlaylistButton";

export const tableColums = [
    {
        title: 'Nom Playlist',
        dataIndex: 'titre',
        key: 'titre',
        sorter: (a, b) => a.titre.localeCompare(b.titre),
        filters: [{text: 'Track de la semaine', value: 'Track de la semaine'}, {text: 'Set de la semaine', value: 'Set de la semaine'}],
        onFilter: (value, record) => record.titre.includes(value)
    },
    {
        title: 'Nombre de piste',
        dataIndex: 'nb',
        key: 'nb',
        width: 150,
        sorter: (a, b) => a.nb - b.nb
    }
];

