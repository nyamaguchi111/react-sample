import { Row } from "components/Row";
import { Banner } from "components/Banner";
import { requests } from "plugins/requests";
// import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Banner />
      <Row
        title="NETFLIX Originals"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}
