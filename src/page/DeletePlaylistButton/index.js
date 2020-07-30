import React, {useState} from "react";
import {Button, Popconfirm} from "antd";
import {deletePlaylist} from "./services";

const DeletePlaylistButton = ({playlistId}) => {
    const [loadingSuprr, setLoadingSuprr] = useState(false);

    const onDeleteConfirm = () => {
        setLoadingSuprr(true);
        deletePlaylist(playlistId)
            .finally(response => {
                setLoadingSuprr(false);
            });
    }

    return (
        <Popconfirm title="Supprimer cette playlist ?" onConfirm={() => onDeleteConfirm()}>
            <Button type="danger" className="button-delete" icon="delete" loading={loadingSuprr}/>
        </Popconfirm>
    );
}

export default DeletePlaylistButton;