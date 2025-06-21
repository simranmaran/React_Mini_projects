// import { Outlet, Link } from 'react-router-dom';

// const Layout = () => {
//     return (
//         <>
//             <Link to="home">Home</Link>
//             <Link to="insert">Insert</Link>
//             <Link to="display">Display</Link>
//             <Link to="update">Update</Link>
//             <Link to="search">Search</Link>
//             <Link to="contact">Contact</Link>
//             <hr size="4" color='red' />
//             <Outlet />
//             <hr size="4" color='red' />
//         </>
//     );
// };

// export default Layout;


import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="home">Home</Link> 
         <Link to="insert">Insert</Link> 
          <Link to="display">Display</Link> 
          <Link to="update">Update</Link> 
           <Link to="search">Search</Link>
      </nav>
      <hr />
      <Outlet />
      <hr />
    </>
  );
};

export default Layout;