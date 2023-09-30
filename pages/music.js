import { NextSeo } from 'next-seo';
import path from 'path';
import React, { useEffect, useState } from 'react';
import { AlbumCard, ArtistCard } from "../components/musiccards"
import styles from "./music.module.css"
import Dropdown from "../components/dropdown"

const musicDataFilePath = path.join(process.cwd(), 'music');

const DisplayOptions = {
  Artists: "Artists",
  Albums: "Albums",
  ArtistsAlbums: "Artist's Albums"
};

const UserSelectableDisplayOptions = {
  Artists: DisplayOptions.Artists,
  Albums: DisplayOptions.Albums,
}

const SortMethods = {
  Random: "Random",
  AZ: "A-Z",
  ZA: "Z-A",
  HighToLow: "Rating (High -> Low)",
  LowToHigh: "Rating (Low -> High)"
};

const ArtistSortMethods = {
  Random: SortMethods.Random,
  AZ: SortMethods.AZ,
  ZA: SortMethods.ZA
};
const AlbumSortMethods = {...SortMethods};

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
  const [whichItemsToDisplay, setWhichItemsToDisplay] = useState(DisplayOptions.Albums);
  // How the displayed items are sorted
  const [howToSortItems, setHowToSortItems] = useState(SortMethods.HighToLow);
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
    if (whichItemsToDisplay === DisplayOptions.Artists) {
      // Default viewing method
      temp = [...fullLibrary]
      setDisplayLibrary(temp);
    }
    else if (whichItemsToDisplay === DisplayOptions.ArtistsAlbums) {
      // Find array element where 'artist.name' matches the global state variable 'displayedArtistName'
      temp = displayLibrary.find((artist) => artist.name === displayedArtistName).albums;
    }
    else if (whichItemsToDisplay === DisplayOptions.Albums) {
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
    if (howToSortItems === SortMethods.AZ) {
      temp.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        else return 0;
      })
      setDisplayLibrary(temp)
    }
    else if (howToSortItems === SortMethods.ZA) {
      temp.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        else return 0;
      })
      setDisplayLibrary(temp)
    }
    else if (howToSortItems === SortMethods.LowToHigh) {
      temp.sort((a, b) => {
        if (a.rating < b.rating) return -1;
        else if (a.rating > b.rating) return 1;
        else return 0
      })
      setDisplayLibrary(temp)
    }
    else if (howToSortItems === SortMethods.HighToLow) {
      temp.sort((a, b) => {
        if (a.rating > b.rating) return -1;
        else if (a.rating < b.rating) return 1;
        else return 0;
      })
      setDisplayLibrary(temp)
    }
    else if (howToSortItems === SortMethods.Random) {
      /*
      temp = displayLibrary
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
                */
      setDisplayLibrary(temp);
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
              <Dropdown options={UserSelectableDisplayOptions} selectedOption={whichItemsToDisplay} updateSelection={(selection) => setWhichItemsToDisplay(selection)}/>

              {/**
                * This Dropdown gives us the option of how to sort what's on display.
                * Albums can be sorted any way, but artists can only be sorted A-Z or Z-A.
                */}
              {(whichItemsToDisplay === DisplayOptions.Albums) ?
                <Dropdown options={AlbumSortMethods} selectedOption={howToSortItems} updateSelection={setHowToSortItems}/>
                :
                <Dropdown options={ArtistSortMethods} selectedOption={howToSortItems} updateSelection={setHowToSortItems}/>
              }
            </div>

            <div className={styles.artistCardGrid}>
              {/**
                * CARD DISPLAY
                * Depending on the sort option (what is being displayed), show either artist cards or album cards
                */}
              {(whichItemsToDisplay === DisplayOptions.Artists) ?

                (displayLibrary.map((artist) => (
                  <div onClick={() => { setDisplayedArtistName(artist.name); setWhichItemsToDisplay(DisplayOptions.ArtistsAlbums); }}>
                    <ArtistCard
                      key={artist.name}
                      artist={artist.name}
                      numRatedAlbums={artist.album?.length}
                    />
                  </div>
                )))

                :

                (displayLibrary.map((album) => (
                  <AlbumCard
                    key={album.name}
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

