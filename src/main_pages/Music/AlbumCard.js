import React from "react";
import "./Music.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

const AlbumCard = (props) => {
    const title = props.title
    const artist = props.artist
    // const genres = props.genres
    const label = props.label
    const year = props.year
    // const tracks = props.tracks
    // const favorites = props.favorites
    const rating = props.rating
    const cover = encodeURIComponent(process.env.PUBLIC_URL + "metadata/" + artist + "/" + title + "/cover.jpg")

    let ratingColor = ""
    if (rating < 6) {
        ratingColor = "red"
    }
    else if (rating >= 6 && rating < 7.5) {
        ratingColor = "orange"
    }
    else if (rating >= 7 && rating < 8.5) {
        ratingColor = "lightGreen"
    }
    else {  // rating >= 8.5
        ratingColor = "green"
    }

    return (
        <Card style={{ width: '16rem' }} className="albumCard">
            <Card.Img variant="top" src={cover} />
            <Card.Body>
                <Card.Title className="cardTitle">{title} ({year})</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{artist}</ListGroupItem>
                <ListGroupItem>{label}</ListGroupItem>
                <ListGroupItem style={{ "color": ratingColor, "fontWeight": "bold" }}>{rating} / 10</ListGroupItem>
            </ListGroup>
        </Card>
    );
}

export default AlbumCard;