import ArtistCard from "./ArtistCard";
import "./ArtistList.css"

function ArtistList({ artists }) {
    return (
        <section className="artist-list">
            {artists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
            ))}
        </section>
    )
}

export default ArtistList;