
import './App.css';
import Row from './Row'
import Banner from './Banner'
import requests from './requests'
import Nav from './Nav'


function App() {
  return (
    <div className="app">
      <Nav />

     <Banner />
     <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow/>
     <Row title ="Top Rated" fetchUrl = {requests.fetTopRated}/>
     <Row title ="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
     <Row title ="Comedies" fetchUrl = {requests.fetcComedyMovies}/>
     <Row title ="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
     <Row title ="Romance" fetchUrl = {requests.fetchRomanceMovies}/>
     <Row title ="Documentatries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;

