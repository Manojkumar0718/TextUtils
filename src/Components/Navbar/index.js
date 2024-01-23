import React from 'react';

const Navbar = ({Switch , setSwitch , toggleMode , mode}) => {



  return (
    <div style={{background : mode === 'light' ? "white" : "black" , border : mode === 'light' ? '2px solid black' : '2px solid white'}}>
      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid" >
          <a className="navbar-brand" href="/" style={{ color : mode === 'light' ? 'black' : 'white'}} >Text Utils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{ color : mode === 'light' ? 'black' : 'white'}} >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" style={{ color : mode === 'light' ? 'black' : 'white'}} >About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color : mode === 'light' ? 'black' : 'white'}} >Contact</a>
              </li>
            </ul>
            <div className="form-check form-switch" style={{marginRight : "15px"}} >
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggleMode} />
              <label className="form-check-label"  htmlFor="flexSwitchCheckDefault"  >Dark Mode</label>
            </div>
            <form className="d-flex" role="search" >
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;



// import React, { useState } from 'react';

// const Navbar = () => {

//     const [isDarkMode, setIsDarkMode] = useState(false);

//     return (
//         <nav className="navbar navbar-expand-lg  bg-body-tertiary">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="/">TextUtils</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item" >
//                             <a className='nav-link active' href="/">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className='nav-link' href="/about">About</a>
//                         </li>
//                         <li className="nav-item" >
//                             <a className='nav-link' href="/contact">Contact</a>
//                         </li>
//                     </ul>

//                     <div className="form-check form-switch">
//                         <input
//                             className="form-check-input"
//                             type="checkbox"
//                             role="switch"
//                             onChange={() => setIsDarkMode(!isDarkMode)}
//                         />
//                         <label className="form-check-label text-white" style={{ marginRight: "15px" }} >
//                             Dark mode
//                         </label>
//                     </div>
//                     <form className="d-flex" role="search">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn btn-primary" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
