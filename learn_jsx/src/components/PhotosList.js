import { useFetchPhotosQuery, useAddPhotosMutation } from "../store";
import Button from "./Button";

function PhotosList({ album }) {
  const { data, error, isLoading } = useFetchPhotosQuery(album);
  console.log(data);
  const [addPhoto, results] = useAddPhotosMutation();
  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={results.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
    </div>
  );
}

export default PhotosList;
