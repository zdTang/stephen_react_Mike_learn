import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { useDispatch } from "react-redux";
import { reset } from "./store";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    // const actionSong = resetSong();
    // console.log(actionSong);
    // dispatch(actionSong);
    const resetAction = reset();
    console.log(resetAction);
    dispatch(resetAction);
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
