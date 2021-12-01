import React from 'react';
import UserLayout from '../Hoc/Userlayout'
import ManageBrands from '../user/ManageBrands'
import ManageWoods from '../user/ManageWoods'


const ManageCategories = () => {
    return (
        <>
            <UserLayout>
                <ManageBrands/>
                <ManageWoods/>
            </UserLayout>
        </>
    );
};

export default ManageCategories;