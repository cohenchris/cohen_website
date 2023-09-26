import styles from './musiccards.module.css';

export function AlbumCard(props) {
  // Consume album props
  const title = props.title;
  const artist = props.artist;
  const label = props.label;
  const year = props.year;
  const rating = props.rating;
  const cover = encodeURIComponent(process.env.PUBLIC_URL + "metadata/" + artist + "/" + title + "/cover.jpg")

  // Determine rating color
  let ratingColor = ""
  if (rating < 6) {
    ratingColor = "red";
  }
  else if (rating < 7.5) {
    ratingColor = "orange";
  }
  else if (rating < 8.5) {
    ratingColor = "lightGreen";
  }
  else {
    ratingColor = "green";
  }

  return(
          <div/> 
  );
}

export function ArtistCard(props) {
  const name = props.artist;
  const image = encodeURIComponent("music/metadata/" + name + "/image.jpg");

  return(
          <div className={styles.artistCard}>
            <h1 className={styles.artistName}>{name}</h1>
            <img className={styles.artistPicture} src={image}/>
          </div>
  );
}
