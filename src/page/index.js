import React from 'react';
import './App.css';
import CreatePlaylistCard from "./CreatePlaylistCard";
import PlaylistTable from "./PlaylistTable";


// const PlaylistDispatch = React.createContext([])

const Main = () => {
    return (
        <div className="App">
            <h1 className="title">Soundcloud Manager</h1>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAmElEQVR4AWOgBIyC/8b/04DQ4D8DKgQiDKj+3/K/6P8P/yFg6X9OfBpU/i/6P+3/Q6AyoAYoWIFLgxAQV/y/BNeAAFqYGkT/H/jf/n8jdg1AWxv/WyI0gDyY+f8wUMNhFA3owA+hYSlRGnaRqmEFqRq8kT3th6Rh8v97/xehafj8vxEzWNn+c0IxDxAzw8QxY5owHNVAIgQAOyoU8xOYjv8AAAAASUVORK5CYII="
                width="24" height="24" alt="Icône blanche transparente"/>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABsElEQVR4AWMYcDAKGKmo9j+5FjASof4/LkuYCBjMiMZm/NrlbPyr1zUNhIFsAwx1mIYQdvHbRlsNVmYmoScff9zVFOO+DhTihyn49///8kP3PqQ5zjj/DeELhE9Y8Bn8uspCVYiTteb///9fmf7/81LjZT3K8PM3ehBE2kpxg8yJQjYYxmbCZvjtLH1hEC3A8C+Y8ecvA4afvxjg+AcmZv71O/RloZEWclDCzGRCDr+XmTpi/4oN9iuwM5QA6fX/vv1kZPj+k4EYLMz4t+x3oX79p1w9S2THwoPoa6q6Meu/P2YM3/4yAwMWaDWjEJSGeBZIQWmsgJmBIRpE8zIw1PxM1whkn3ljE0gHC8wmjp+/Cv/+/38UYuB/oAiQxm4BQcDKwJANpDahRvKnbxADmOAGkWkB2H3vUFIRWOuXb1C/IFsAtpBkC37/Y1iCkUyZ93yO+WPJ5gsygAmWxP4DaYjBf4H0XyiND3z5859hAsfxX9vgsYyN3q/GwAay/PUfhr+iLAzMIFqJnYHt3k+GX4e/MPyb/ApoEeHi4j/WzIXCJwOgZzZGQgUg2ZaMHDAKAMtFwXTSyaEcAAAAAElFTkSuQmCC"
                width="24" height="24" alt="Icône orange transparente"/>
            <div className="playlist-display">
                <PlaylistTable/>
                <CreatePlaylistCard/>
            </div>
        </div>
    );
}


export default Main;
