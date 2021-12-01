import React from "react";
import UserLayout from "../Hoc/Userlayout.jsx";
import MyButton from "../utils/Buttons";
import historyBlock from "../utils/User/history_block";

const userDashboard = ({ user }) => {
  return (
    <>
      <UserLayout>
        <div className="user_nfo_panel">
          <h1>User information</h1>
          <span>Name</span>
          <span>lastname</span>
          <span>Email</span>
          <MyButton
            type="default"
            title="Edit acount info"
            linkTo="/user/user_profile"
          />
        </div>
        {/* {user.userdata.history ? ( */}
          <div className="user_nfo_panel">
            <h1>User History</h1>
            <div className="user_product_block_wrapper">
            Paypal Account did not Available in pakistan
              {/* <historyBlock 
                products={user.userdata.history}
              /> */}
            </div>
          </div>
        {/* ) : null} */}
      </UserLayout>
    </>
  );
};

export default userDashboard;
