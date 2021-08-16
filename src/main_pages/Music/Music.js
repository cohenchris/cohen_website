import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap"
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import AlbumCard from "./AlbumCard.js"

const Music = () => {
    const [library, setLibrary] = useState([])

    useEffect(() => {
        const getLibraryJSON = async () => {
            let response = await fetch("library.json")
            response = await response.json()
            setLibrary(response)
        }
        getLibraryJSON()
    }, [])

    return (
        < div className="background" >
            <NavigationBar />
            <div>
                <Container fluid>
                    <Row>
                        {library.map((artist) => (
                            <>
                                {artist.albums.map((album) => (
                                    <Col>
                                        <AlbumCard
                                            title={album.title}
                                            artist={artist.name}
                                            genres={album.genres}
                                            label={album.label}
                                            year={album.year}
                                            tracks={album.tracks}
                                            favorites={album.favorites}
                                            rating={album.rating}
                                        />
                                    </Col>
                                ))}
                            </>
                        ))}
                    </Row>
                </Container>
            </div >
            <Footer />
        </div >
    )
}



export default Music;