import "./ArtistCard.css"

function ArtistCard({ artist }) {
    return (
        <div className="artist-card">
            <h3>{artist.name}</h3>
            <p>{artist.genre}</p>
            <p>{artist.bio}</p>

            <ul>
                {artist.albums.map((album, index) => (
                    <li key={index}>
                        {album.title} ({album.year})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArtistCard;