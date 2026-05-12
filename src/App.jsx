
import Header from "./components/Header";
import About from "./components/About";
import ArtistList from "./components/ArtistList";
import "./App.css"

function App() {
  return (
    <div className="main">
      <Header />
      <About />
      <ArtistList artists={data.artists} />
    </div>
  )
}

export default App;