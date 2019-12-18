import React from 'react';
import './App.css';
import { Table, Button, Icon, notification, InputNumber, Card, Popconfirm } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import getWeekNumber from './DateUtils'
import Text from 'antd/lib/typography/Text';


const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
  });
};

function PlaylistTable(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    listPlaylist();
  }, []);


  return (
    <div className="playlist-table">
    <Card className="playlist-table-card">
    <Button type="primary" className="button-sync-playlist" onClick={() => listPlaylist()}><Icon type="sync" spin={loading} /></Button>
    <Table
      className="Table"
      dataSource={data}
      loading={loading}
      pagination={false}
      maxHeight={"500px"}
      scroll={{ y: "400px" }}
      columns={[
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
        },
        {
          dataIndex: 'key',
          width: 75,
          align: 'center',
          render: record => <DeletePlaylistButton playlistId={record}/>
        }
      ]} />
      </Card>
      </div>
 );


  function listPlaylist() {
    setLoading(true);
    axios.get('http://localhost:5000/playlists')
      .then(response => {
        console.log(response);
        openNotificationWithIcon('success', 'Playlists à jour.', '');
        setData(response.data);
        setLoading(false);
      }, error => {
        console.error(error);
        openNotificationWithIcon('error',
          'Erreur chargement playlist',
          'Le chargement de la liste des playlists à planter, faut appuyer sur le bouton de rafraichisement.')
        setLoading(false);
      });
  }
}

function DeletePlaylistButton(props) {
  const [loadingSuprr, setLoadingSuprr] = useState(false);
  return (
  <Popconfirm title="Supprimer cette playlist ?" onConfirm={() => {
    setLoadingSuprr(true);
    deletePlaylist(props.playlistId)
      .finally(response => { setLoadingSuprr(false); });
  } }>
    <Button type="danger" className="button-delete" icon="delete" loading={loadingSuprr} />
  </Popconfirm>
  );
}

async function deletePlaylist(playlistId){
  console.log('playlist id : ' + playlistId)
  return await axios.delete('http://localhost:5000/playlists/' + playlistId)
  .then(response =>{
    openNotificationWithIcon('success', 'Playlists supprimer.', '');
  }, error =>{
    openNotificationWithIcon('error',
    'Erreur chargement playlist',
    'Le chargement de la liste des playlists à planter, faut appuyer sur le bouton de rafraichisement.')
  })
}

function CreatePlaylistCompenent(props) {
  const [loading, setLoading] = useState(false)
  const [selectedNumberWeek, setSelectedNumberWeek] = useState(getWeekNumber(new Date()))

  function createplaylist(weekNumber) {
    setLoading(true)
    axios.post('http://localhost:5000/playlists/weekly/' + weekNumber)
      .then(response => {
        setLoading(false);
        openNotificationWithIcon('success', 'Playlists créées !', '');
      }, error => {
        console.log(error);
        setLoading(false);
        openNotificationWithIcon('error', 'Echec de la création', '');
      });
  }

  return (
    <Card className="playlist-creator">
      <Text>Numéro de semaine : </Text>
      <InputNumber style={{margin : "5px"}} min={0} max={53} defaultValue={getWeekNumber(new Date())} onChange={value => setSelectedNumberWeek(value)} />
      <Button type="primary" icon="plus" loading={loading} onClick={() => createplaylist(selectedNumberWeek)}>Créer Playlists</Button>
    </Card>);
}

function App() {
  return (
    <div className="App">
      <h1 className="title">Soundcloud Manager</h1>
      {/* <img src="https://media.giphy.com/media/Yx4s7tvm4mbMA/giphy.gif"></img> */}
      <div className="playlist-display">
        <PlaylistTable />
        <CreatePlaylistCompenent />
      </div>
    </div>
  );
}


export default App;
