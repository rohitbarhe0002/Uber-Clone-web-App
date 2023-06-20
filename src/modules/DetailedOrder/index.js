import React from 'react'
import { Card,Descriptions,Divider,List,Button } from 'antd';
import dishes from '../../assets/data/dashboard/dishes.json';
import { useParams  } from 'react-router-dom';

function DetailedOrder() {
  const { id } = useParams();
  return (
    <Card title={`order-title ${id}`} style={{margin:20}}>
    <Descriptions bordered column={{lg:1,md:1,sm:1}}  >
      <Descriptions.Item label="Customer">Lukas Grind</Descriptions.Item>
      <Descriptions.Item label="Customer Address">city loass angesls</Descriptions.Item>
    </Descriptions>
    <Divider/>
    <List 
    dataSource={dishes}
    renderItem={(dishItem)=>(
      <List.Item>
        <div style={{fontWeight:'bold '}}> {dishItem.name} * {dishItem.quantity}</div>
        <div>${dishItem.price}</div>
    
      </List.Item>
    )}
    />
    <Divider/>
    <div style={styles.totalContainer}>
      <h2>Total:</h2>
      <h2 style={styles.totalPrice}>$42.96</h2>
      
    </div>
    <Divider/>
    <div style={styles.ButtonContainer}>
    <Button block type='primay' size='large' style={styles.button} >
       Decline Order
      </Button>
      <Button block type='primary' size='large' style={styles.button} danger>
        Accept Order
      </Button>
    </div>
    <Button block type='primary' size='large' style={styles.button}>
       Food accept order
      </Button>
       </Card>
  )
}

const styles = {
    totalContainer: {
      flexDirection: 'row',
      display: 'flex',
     
    },
    totalPrice:{
      marginLeft: 'auto',
      fontWeight:'bold',
    },
    ButtonContainer:{
      display:'flex',
      paddingBottom:30,
    },button:{
      marginRight:20,
    }
  }

export default DetailedOrder;