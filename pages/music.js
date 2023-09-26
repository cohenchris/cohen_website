import { NextSeo } from 'next-seo';
import path from 'path';
import React, { useEffect, useState } from 'react';
import { AlbumCard, ArtistCard } from "../components/musiccards"
import styles from "./music.module.css"
import Dropdown from "../components/dropdown"

const musicDataFilePath = path.join(process.cwd(), 'music');
const ALL_SORT_OPTIONS = ["Artist", "Albums", "Artist's Albums"];
const USER_SORT_OPTIONS = ALL_SORT_OPTIONS.slice(0, 2);
const SORT_METHODS = ["A-Z", "Z-A", "rating (low-high)", "rating (high-low)"];
const ARTIST_SORT_METHODS = SORT_METHODS.slice(0, 2);
const ALBUM_SORT_METHODS = [...SORT_METHODS];

/**
 * Fetch and parse music JSON from public/music
 */
async function fetchAndParseMusicJSON() {
  const jsonFilePath = path.join(musicDataFilePath, 'library.json');

  const response = await fetch(jsonFilePath);
  const data = await response.json();

  return data;
}

/**
 * Render Music page
 */
export default function Music() {
  const [fullLibrary, setFullLibrary] = useState([]);
  const [displayLibrary, setDisplayLibrary] = useState([])
  const [sortOption, setSortOption] = useState(ALL_SORT_OPTIONS[0]);
  const [artist, setArtist] = useState({});
  const [sortMethod, setSortMethod] = useState(SORT_METHODS[0]);

  const updateSelectionStatus = (newStatus) => {
    setSortOption(newStatus);
    console.log(sortOption);
  }

  // Initialization
  useEffect(() => {
    const init = async () => {
      let response = await fetchAndParseMusicJSON();

      // sort high-low rating by default
      // TODO: encapsulate into function
      response.sort((item1, item2) => {
        if (item1.rating > item2.rating) return -1;
        else if (item1.rating < item2.rating) return 1;
        else return 0;
      })

      setFullLibrary(response)
      setDisplayLibrary(response);
    }
    init()
  }, [])

  // Monitor sortOption for changes
  useEffect(() => {
    let temp = [];
    if (sortMethod === "Artist") {
      temp = [...fullLibrary];
      setDisplayLibrary(temp);
    }
    else if (sortMethod === "Artists Albums") {
      setDisplayLibrary(temp);
    }
    else if (sortMethod === "Albums") {
      setDisplayLibrary(temp);
    }
  }, [sortOption]);

  // Monitor sortMethod for changes
  useEffect(() => {
    let temp = [...displayLibrary];
    if (sortMethod === "A-Z") {
      temp.sort((a, b) => {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        else return 0;
      })
      setDisplayLibrary(temp)
    }
    else if (sortMethod === "Z-A") {
      temp.sort((a, b) => {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
        else return 0;
      })
      setDisplayLibrary(temp)
    }
    else if (sortMethod === "rating (low-high)") {
      temp.sort((a, b) => {
        if (a.rating < b.rating) return -1;
        else if (a.rating > b.rating) return 1;
        else return 0
      })
      setDisplayLibrary(temp)
    }
    else if (sortMethod === "rating (high-low)") {
      temp.sort((a, b) => {
        if (a.rating > b.rating) return -1;
        else if (a.rating < b.rating) return 1;
        else return 0;
      })
      setDisplayLibrary(temp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortMethod])

  return(
          <div className={styles.artistCardGrid}>

            <NextSeo
              title="Music"
              description="A compilation of music that I have rated."
            />

            <Dropdown options={USER_SORT_OPTIONS} selectedOption={sortOption} updateSelection={updateSelectionStatus}/>
            {(sortOption === "Albums") ?
              <Dropdown options={ALBUM_SORT_METHODS} selectedOption={sortMethod} updateSelection={setSortMethod}/>
              :
              <Dropdown options={ARTIST_SORT_METHODS} selectedOption={sortMethod} updateSelection={setSortMethod}/>
            }

            {displayLibrary.map((artist) => (
              <button
                onClick={() => { setArtist(artist.name); setSortOption("Artist's Albums"); console.log(artist); console.log(sortOption) }}>
              <ArtistCard
                artist={artist.name}
              />
              </button>
            ))}
          </div>
        );
}

