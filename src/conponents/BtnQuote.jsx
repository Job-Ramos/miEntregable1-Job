import getRandomElemArray from "../utils/getRandedomElemArray"

const BtnQuote =({ setQuote,phrases, setNumberBg, citasBíblicas}) =>{


  const handleRandomPhrase = () => {
    setQuote(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1, 2, 3, 4]))
  }
  return (
    <button className="container_btn" onClick={handleRandomPhrase}>Other phrase</button>
  )
}

export default BtnQuote