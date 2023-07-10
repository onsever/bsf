import {useEffect, useState} from "react";

export default function App() {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=6");

        return await response.json();
    }

    useEffect(() => {
        fetchData().then(data => {
            setPhotos(data);
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <ul className="list">
                {photos.map(photo => (
                    <li key={photo.id}>
                        <img className="image" src={photo.url} alt={`Photo ${photo.id}`} />
                        <h2>{photo.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}
