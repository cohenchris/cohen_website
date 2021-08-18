import React, { useEffect, useState } from "react";
import { Row, Col, Container, Dropdown } from "react-bootstrap"
import Select from 'react-select';
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import AlbumCard from "./AlbumCard.js"

const SORT_METHODS = ["A-Z", "Z-A", "rating (low-high)", "rating (high-low)"]

const Music = () => {
    let MusicLibrary = []   // base array of albums

    const [Library, setLibrary] = useState(MusicLibrary)
    const [genreFilter, setGenreFilter] = useState([])
    const [genreOptions, setGenreOptions] = useState([])
    const [yearFilter, setYearFilter] = useState([])
    const [yearOptions, setYearOptions] = useState([])
    const [sortMethod, setSortMethod] = useState("rating (high-low)")    // A-Z, Z-A, rating low-high, rating high-low, 


    // Initialization
    useEffect(() => {
        const init = async () => {
            // get library JSON
            let response = await fetch("library.json")
            response = await response.json()
            // sort high-low rating by default
            response.sort((item1, item2) => {
                if (item1.rating > item2.rating) return -1;
                else if (item1.rating < item2.rating) return 1;
                else return 0;
            })
            MusicLibrary = response
            setLibrary(MusicLibrary)
        }

        init()
    }, [])

    // Monitor sortMethod for changes
    useEffect(() => {
        let temp = [...Library];
        if (sortMethod === "A-Z") {
            temp.sort((a, b) => {
                if (a.title < b.title) return -1;
                else if (a.title > b.title) return 1;
                else return 0;
            })
            setLibrary(temp)
        }
        else if (sortMethod === "Z-A") {
            temp.sort((a, b) => {
                if (a.title > b.title) return -1;
                if (a.title < b.title) return 1;
                else return 0;
            })
            setLibrary(temp)
        }
        else if (sortMethod === "rating (low-high)") {
            temp.sort((a, b) => {
                if (a.rating < b.rating) return -1;
                else if (a.rating > b.rating) return 1;
                else return 0
            })
            setLibrary(temp)
        }
        else if (sortMethod === "rating (high-low)") {
            temp.sort((a, b) => {
                if (a.rating > b.rating) return -1;
                else if (a.rating < b.rating) return 1;
                else return 0;
            })
            setLibrary(temp)
        }
    }, [sortMethod])


    return (
        < div className="background" >
            <NavigationBar />

            <div className="musicStyle">
                <Container fluid>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark">
                            {sortMethod}
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            {SORT_METHODS.map((method) => (
                                <Dropdown.Item onClick={() => setSortMethod(method)}>{method}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Row>
                        {Library.map((album) => (
                            <Col>
                                <AlbumCard
                                    title={album.title}
                                    artist={album.artist}
                                    genres={album.genres}
                                    label={album.label}
                                    year={album.year}
                                    tracks={album.tracks}
                                    favorites={album.favorites}
                                    rating={album.rating}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div >
            <Footer />
        </div >
    )
}



export default Music;