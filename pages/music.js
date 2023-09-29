import { NextSeo } from 'next-seo';
import path from 'path';
import React, { useEffect, useState } from 'react';
import { AlbumCard, ArtistCard } from "../components/musiccards"
import styles from "./music.module.css"
import Dropdown from "../components/dropdown"

const musicDataFilePath = path.join(process.cwd(), 'music');
const ALL_DISPLAY_OPTIONS = ["Artists", "Albums", "Artist's Albums"];
const SELECTABLE_DISPLAY_OPTIONS = ALL_DISPLAY_OPTIONS.slice(0, 2);

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
  // Full library for later reference
  const [fullLibrary, setFullLibrary] = useState([]);
  // Library that the website displays
  const [displayLibrary, setDisplayLibrary] = useState([])
  // Determines which items are displayed
  const [whichItemsToDisplay, setWhichItemsToDisplay] = useState(ALL_DISPLAY_OPTIONS[0]);
  // How the displayed items are sorted
  const [howToSortItems, setHowToSortItems] = useState(SORT_METHODS[0]);
  // If we're showing a specific artist's albums, this determines which artist
  const [displayedArtistName, setDisplayedArtistName] = useState("");

  // Initialization
  useEffect(() => {
    let response;
    const init = async () => {
      response = await fetchAndParseMusicJSON();

      setFullLibrary(response);
      setDisplayLibrary(response);
    }
    init();
  }, [])

  // Monitors and handles changes to which items we display
  useEffect(() => {
    let temp = [];
    if (whichItemsToDisplay === "Artists") {
      // Default viewing method
      temp = [...fullLibrary]
      setDisplayLibrary(temp);
    }
    else if (whichItemsToDisplay === "Artist's Albums") {
      // Find array element where 'artist.name' matches the global state variable 'displayedArtistName'
      console.log(displayedArtistName);
      temp = displayLibrary.find((artist) => artist.name === displayedArtistName).albums;
    }
    else if (whichItemsToDisplay === "Albums") {
      // Append each artist's albums to the display library
      for (let i = 0; i < fullLibrary.length; i++)
      {
        temp = temp.concat(fullLibrary[i].albums);
      }
    }

    setDisplayLibrary(temp);
  }, [whichItemsToDisplay]);

  // Monitors and handles changes to how we sort the displayed items
  useEffect(() => {
    let temp = [...displayLibrary];
    if (howToSortItems === "A-Z") {
      temp.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        else return 0;
      })
      setDisplayLibrary(temp)
    }
    else if (howToSortItems === "Z-A") {
      temp.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        else return 0;
      })
      setDisplayLibrary(temp)
    }
    else if (howToSortItems === "rating (low-high)") {
      temp.sort((a, b) => {
        if (a.rating < b.rating) return -1;
        else if (a.rating > b.rating) return 1;
        else return 0
      })
      setDisplayLibrary(temp)
    }
    else if (howToSortItems === "rating (high-low)") {
      temp.sort((a, b) => {
        if (a.rating > b.rating) return -1;
        else if (a.rating < b.rating) return 1;
        else return 0;
      })
      setDisplayLibrary(temp)
    }
  }, [howToSortItems])

  return(
          <div>
            <NextSeo
              title="Music"
              description="A compilation of music that I have rated."
            />

            <div className={styles.dropdowns}>
              {/* This Dropdown gives the option of what to display - Artists or Albums */}
              <Dropdown options={SELECTABLE_DISPLAY_OPTIONS} selectedOption={whichItemsToDisplay} updateSelection={(selection) => setWhichItemsToDisplay(selection)}/>


              {/**
                * This Dropdown gives us the option of how to sort what's on display.
                * Albums can be sorted any way, but artists can only be sorted A-Z or Z-A.
                */}
              {(whichItemsToDisplay === "Albums") ?
                <Dropdown options={ALBUM_SORT_METHODS} selectedOption={howToSortItems} updateSelection={setHowToSortItems}/>
                :
                <Dropdown options={ARTIST_SORT_METHODS} selectedOption={howToSortItems} updateSelection={setHowToSortItems}/>
              }
            </div>

            <div className={styles.artistCardGrid}>
              {/**
                * CARD DISPLAY
                * Depending on the sort option (what is being displayed), show either artist cards or album cards
                */}
              {(whichItemsToDisplay === "Artists") ?

                (displayLibrary.map((artist) => (
                  <div onClick={() => { setDisplayedArtistName(artist.name); setWhichItemsToDisplay("Artist's Albums"); }}>
                    <ArtistCard
                      artist={artist.name}
                      numRatedAlbums={artist.album?.length}
                    />
                  </div>
                )))

                :

                (displayLibrary.map((album) => (
                  <AlbumCard
                    name={album.name}
                    artist={album.artist}
                    label={album.label}
                    year={album.year}
                    rating={album.rating}
                  />
                )))
              }
            </div>
          </div>
        );
}

