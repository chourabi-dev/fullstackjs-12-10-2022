import {Link} from 'react-router-dom';


export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <Link to={ "/" } class="nav-link "   >Home</Link>
        </li> 
        <li class="nav-item">
          <Link to={ "/about" } class="nav-link "   >About</Link>
        </li> 
        <li class="nav-item">
          <Link to={ "/users" } class="nav-link "   >Users</Link>
        </li> 
        
      </ul>
    </div>
  </div>
</nav>
    );
}