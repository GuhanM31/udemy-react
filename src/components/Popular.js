
import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"

// popular component
function Popular() {
    return(
      <div class="populer">
  <h1 class="populer__title">most populer</h1>
  <p>pick the best</p>
  <div class="populer__container">
      <div class="cource-card">
          <img src={one} alt="program img"></img>
          <h3>2023 python data visaulisation masterclass</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
      </div>
  
      <div class="cource-card">
          <img src={two} alt="program img"></img>
          <h3>Basic to advance programming to EMC</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
      </div>
  
      <div class="cource-card">
          <img src={three} alt="program img"></img>
          <h3>WEB development bootcamp on 2023</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
      </div>
  
      <div class="cource-card">
          <img src={four} alt="program img"></img>
          <h3>Master the ui/ux designing with figma</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
      </div>
  
      <div class="cource-card">
          <img src={three} alt="program img"></img>
          <h3>WEB development bootcamp on 2023</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
      </div>
  
      <div class="cource-card">
          <img src={one} alt="program img"></img>
          <h3>2023 python data visaulisation masterclass</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
      </div>
  
      <div class="cource-card">
          <img src={two} alt="program img"></img>
          <h3>Basic to advance programming to EMC</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
      </div>
  
      <div class="cource-card">
          <img src={four} alt="program img"></img>
          <h3>Master the ui/ux designing with figma</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
      </div>
  
  </div>
  </div>
    )
   }

   export default Popular