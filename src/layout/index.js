import Header from '../components/Header';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Photograph from '../components/Photograph'
import VipAccessSignUp from '../components/VipAccessSignUp';
import VipAccessInfo from '../components/VipAccessInfo';
import ProductList from '../components/ProductList';

function Layout() {
  return (
    <div>
        <Header/>
        <Menu/>
        <Banner />
        <Photograph />
        <VipAccessSignUp />
        <VipAccessInfo />
        <ProductList />
    </div>
  );
}

export default Layout;
