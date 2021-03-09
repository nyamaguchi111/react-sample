import React, { useEffect, useState } from "react";
import axios from "plugins/axios";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import styled from "styled-components";
import Youtube from "react-youtube";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`;
const CustomGridList = styled(GridList)`
  flex-wrap: nowrap !important;
  transform: translateZ(0);
`;
const CustomTitleBar = styled(GridListTileBar)`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const Row = ({ title, fetchUrl }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/297762/videos?api_key=${process.env.API_KEY}&language=en-US`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <h2 style={{ color: "#eee" }}>{title}</h2>
      <Root>
        <CustomGridList cols={6}>
          {movies.map((movie, i) => (
            <GridListTile key={i}>
              <img
                key={movie.id}
                src={`${base_url}${
                  movie.poster_path ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
              <CustomTitleBar
                title={movie.name}
                actionIcon={
                  <IconButton aria-label={`star ${movie.title}`}>
                    <StarBorderIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </CustomGridList>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </Root>
    </>
  );
};
