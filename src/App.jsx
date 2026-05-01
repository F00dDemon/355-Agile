import data from "./data.json";
import Header from "./components/Header";
import About from "./components/About";
import ArtistList from "./components/ArtistList";

function App() {
  return (
    <>
      <Header />
      <About />
      <ArtistList artists={data.artists} />
    </>
  )
}

export default App;