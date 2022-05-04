function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav nav-tabs">
          <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Create an account">
            <a className="nav-link" href="#/CreateAccount/" style={{"color": "white"}}>Create Account</a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Make a deposit">
            <a className="nav-link" href="#/deposit/" style={{"color": "white"}}>Deposit</a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Make a withdrawal">
            <a className="nav-link" href="#/withdraw/" style={{"color": "white"}}>Withdraw</a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="User information">
            <a className="nav-link" href="#/alldata/" style={{"color": "white"}}>AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}