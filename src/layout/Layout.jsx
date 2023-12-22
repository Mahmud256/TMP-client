import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../page/Footer/Footer';

const Layout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* <div className='max-w-screen-xl mx-auto'>

            </div> */}
        </div>
    );
};

export default Layout;