import React, { useState } from 'react'
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, SketchCircleFilled, SketchOutlined } from '@ant-design/icons';
import user from '../../assets/data/user/user.json'
import EditModal from '../../shared/EditModal';
import ModalView from '../../shared/Modal';
import './style.css'
const { Meta } = Card;

function Settings() {
    const [loading, setLoading] = useState(true);
    const onChange = (checked) => {
        setLoading(!checked);
    };

    const [userProfileData, setUserProfileData] = useState(user)
    const [openEditModal, setOpenEditModal] = useState(false)
    const handleChange = (e) => setUserProfileData({ ...userProfileData, profileUrl: URL.createObjectURL(e.target.files[0]) })

    const handleProfileEdit = () => {
        setOpenEditModal(!openEditModal)
    }
    return (
        <>
            <Card title="Settings" style={{ margin: 20, width: '50%' }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" onClick={handleProfileEdit} />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            // loading={loading}
            >
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ position: 'relative', height: '50px' }}>
                        <img src={userProfileData.profileUrl} style={{
                            width: '50px', height: '50px',
                            borderRadius: '100%',
                        }} />
                        <input type="file" onChange={handleChange} className='userImageUpload' />
                        <EditOutlined className='editIcon' key={"edit"} />
                    </div>
                    <div style={{ width: '100%' }}>
                        <h3 style={{ marginBottom: '0px' }}><strong>{userProfileData.userName}</strong></h3>
                        <p className='userAddress-fields'><SketchCircleFilled style={{ marginRight: '5px', color: 'blue' }} key={"SketchCircleFilled"} />{userProfileData.userType}</p>
                        <p className='userAddress-fields'>{userProfileData.address}</p>
                        <p className='userDetails'>{userProfileData.city}</p>
                        <p className='userDetails'>{userProfileData.phoneNumber}</p>
                    </div>

                </div>

                {/* <Meta
                        style={{ height: 200 }}
                        avatar={<Avatar src="https://media.licdn.com/dms/image/C5103AQHbHrDyYD5s-Q/profile-displayphoto-shrink_800_800/0/1579941007041?e=2147483647&v=beta&t=Mekvd1j-rLlX_-VV0KN24vn1YJPqDXeRMgyrsJOXJjU" />}
                        title="Card title"
                        description="This is the description"
                    /> */}

            </Card>


            <ModalView isModalOpen={openEditModal} setIsModalOpen={setOpenEditModal} >
                <EditModal isModalOpen={openEditModal} setIsModalOpen={setOpenEditModal} cardTitle="Edit Profile" userData={userProfileData} setUserData={setUserProfileData} />
            </ModalView>
        </>
    )
}

export default Settings;