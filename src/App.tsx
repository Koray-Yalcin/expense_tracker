import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import SingUp from './components/SingUp';
import { Layout, Menu } from 'antd';
import Login from './components/Login';
import Category from './components/Categories';
import Records from './components/Records';

const { Header, Content, Footer } = Layout;

function App() {
  return(
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
       <Routes>
         <Route path='/register' element= {<SingUp></SingUp>}></Route>
         <Route path='/login' element= { <Login></Login> }></Route>
         <Route path='/category' element= { <Category></Category> }></Route>
         <Route path='/record' element= { <Records></Records> }></Route>
       </Routes>
    </Content>
    <Footer style={{ textAlign: 'center' }}> Expense Tracker </Footer>
  </Layout>
)
}

export default App;
