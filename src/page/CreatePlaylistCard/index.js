import React, {useState} from "react";
import {getWeekNumber} from "../utils/DateUtils";
import {createPlaylist} from "../services";
import {Button, Card, InputNumber} from "antd";
import {PlusCircleTwoTone} from "@ant-design/icons";

const CreatePlaylistCard = () => {
    // const [load, setLoad] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedNumberWeek, setSelectedNumberWeek] = useState(getWeekNumber(new Date()));

    const onClickCreate = () => {
        setLoading(true);
        createPlaylist(selectedNumberWeek)
            .finally(() => setLoading(false));
    };

    return (
        <Card className="playlist-creator">
            <p>Numéro de semaine : </p>
            <InputNumber style={{margin: "5px"}} min={0} max={53} defaultValue={getWeekNumber(new Date())}
                         onChange={value => setSelectedNumberWeek(value)}/>
            <Button type="default" icon={<PlusCircleTwoTone />} loading={loading} onClick={onClickCreate}>
                Créer Playlists
            </Button>
        </Card>
    );
}

export default CreatePlaylistCard;