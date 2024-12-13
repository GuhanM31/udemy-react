
// navbar component

function Navebar() {
  return (
    <div class="navbar">
      <div class="navbar__s1">
        <h1 class="navbar__s1__title">udamy</h1>
      </div>
      <div class="navbar__s2">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="search for anything here"></input>
      </div>
      <div class="navbar__s3">


        <div class="cource">
          <p>cource</p>
          <div class="cource__popup">

            <p>◉development</p>
            <p>◉Business</p>
            <p>◉it & software</p>
            <p>◉personal development</p>
            <p>◉drsign</p>
            <p>◉marketing</p>

          </div>
        </div>


        <div class="mylearning">
          <p>my learning</p>
          <div class="mylearning__popup">
            <p>you did'n purchase anything yet</p>
          </div>
        </div>

        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="navbar__s4"><i class="fa-solid fa-bars"></i></div>

    </div>
  )
}

export default Navebar