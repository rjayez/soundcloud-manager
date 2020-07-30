import React, {useCallback, useEffect, useState} from "react";
import {listPlaylist} from "../services";
import {Button, Card, Table} from "antd";
import {tableColums} from "../utils";
import {SyncOutlined} from "@ant-design/icons";

const PlaylistTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadPlaylist = useCallback(() => {
        setLoading(true);
        listPlaylist()
            .then(value => setData(value))
            .finally(() => setLoading(false));
    }, [])

    useEffect(() => {
        loadPlaylist();
    }, [loadPlaylist]);


    return (
        <div className="playlist-table">
            <Card className="playlist-table-card">
                <Button type="primary" className="button-sync-playlist" onClick={loadPlaylist}>
                    <SyncOutlined  spin={loading}/>
                </Button>
                <Table
                    className="Table"
                    dataSource={data}
                    loading={loading}
                    pagination={false}
                    maxHeight={"500px"}
                    scroll={{y: "400px"}}
                    columns={tableColums}/>
            </Card>
        </div>
    );


}

export default PlaylistTable;