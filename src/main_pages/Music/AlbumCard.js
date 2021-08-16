import React, { useState } from "react";
import "./Music.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

const AlbumCard = (props) => {
    const title = props.title
    const artist = props.artist
    const genres = props.genres
    const label = props.label
    const year = props.year
    const tracks = props.tracks
    const favorites = props.favorites
    const rating = props.rating
    const cover = encodeURIComponent(process.env.PUBLIC_URL + "metadata/" + artist + "/" + title + "/cover.jpg")

    return (
        <Card style={{ width: '15rem' }} className="albumCard">
            <Card.Img variant="top" src={cover} />
            <Card.Body>
                <Card.Title className="cardTitle">{title} ({year})</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{artist}</ListGroupItem>
                <ListGroupItem>{label}</ListGroupItem>
                <ListGroupItem>{rating} / 10</ListGroupItem>
            </ListGroup>
        </Card>
    );
}

export default AlbumCard;