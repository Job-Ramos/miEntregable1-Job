
const Quote = ({ phrase }) => {

  return (
    <p className="container_phrase">{phrase .phrase} <br /> <span className="container_bibleNotes">{phrase.citaBíblica}</span> </p>
  )
}

export default Quote