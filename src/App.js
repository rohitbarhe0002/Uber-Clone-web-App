import './App.css';
import { Layout, Image } from 'antd';
import SideMenu from './components/sideMenu';
import AppRoutes from './components/AppRoutes';

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <>
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
    </>

  );
}

export default App;
