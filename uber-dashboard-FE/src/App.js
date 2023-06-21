import logo from './logo.svg';
import './App.css';
import orders from './assets/data/dashboard/orders.json'
import { Route, Routes } from 'react-router-dom';
import Order from './modules/Orders';
import DetailedOrder from './modules/DetailedOrder';
import { Layout, Image } from 'antd';
import SideMenu from './components/sideMenu';
import RestaurentsMenu from './modules/RestourentsView';
import CreateItem from './modules/CreateItem';
import OrderHistory from './modules/OrderHistory';
import AppRoutes from './components/AppRoutes';
import SignUp from './modules/signup';
const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <>
    <SignUp/>
    {

false &&    
 <Layout>
      <Sider style={{ height: "100vh", backgroundColor: 'white', }}>
        <Image src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg" preview={false} />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          @2021 uber Eats copy
        </Footer>
      </Layout>
    </Layout>
}
    </>

  );
}

export default App;
