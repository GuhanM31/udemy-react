import Sale from "../assets/images/sale image.jpg"
// sale image components

function Saleimg() {
  return (
    <div class="sale-image">
      <img src={Sale} alt="img"></img>
      <div class="sale-image__offer">
        <h1>udemy flash sale ! 24 hours to save</h1>
        <p>get the top course for just - 499 only .lifetime to learn</p>

      </div>
    </div>
  )
}

export default Saleimg