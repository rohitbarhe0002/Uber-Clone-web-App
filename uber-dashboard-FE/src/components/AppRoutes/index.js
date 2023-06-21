import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Order from '../../modules/Orders';
import DetailedOrder from '../../modules/DetailedOrder';
import RestaurentsMenu from '../../modules/RestourentsView';
import CreateItem from '../../modules/CreateItem';
import OrderHistory from '../../modules/OrderHistory';
import Settings from '../../modules/Settings';
function AppRoutes() {
  return (
    <Routes>
    <Route path='orderDetail' element={<Order/>}/>
    <Route path='orders/:id' element={<DetailedOrder/>}/>
    <Route path='menu' element={<RestaurentsMenu/>}/>
    <Route path='craeteItem' element={<CreateItem/>}/>
    <Route path='orderHistory' element={<OrderHistory/>}/> 
    <Route path='orderHistory/orderDetail/:id' element={<DetailedOrder/>}/>  
    <Route path='settings' element={<Settings/>}/>  

  </Routes> 
  )
}

export default AppRoutes;