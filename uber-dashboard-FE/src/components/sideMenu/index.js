import { Menu } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
function SideMenu () {
    const navigate = useNavigate();
   const  menuItems = [{
    key:'/',
    label: 'orders'
   },
   {
    key:'menu',
    label: 'Menu'
   },
   {
    key:'orderHistory',
    label: 'Order History'
   },
   {
    key:'settings',
    label: 'Settings'
   },
]

   const onMenuItemClicked = (menuItems) => navigate(menuItems.key)
  return (
<Menu items={menuItems} onClick={(menuItems)=>navigate(menuItems.key)}/>
  )
}

export default SideMenu;