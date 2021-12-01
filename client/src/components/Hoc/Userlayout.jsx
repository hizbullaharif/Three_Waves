import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const links = [
    {
        name: 'My acount',
        linkTo: '/user/dashboard'
    },
    {
        name: 'user Information',
        linkTo: '/user/user_profile'
    },
    {
        name: 'My cart',
        linkTo: '/user/cart'
    },
]

const admin = [
    {
        name: 'site Info',
        linkTo: '/admin/site_info'
    },
    {
        name: 'Add products',
        linkTo: '/add_products'
    },
    {
        name: 'Manage Categories',
        linkTo: '/manage_categories'
    }
]

const generateLinks = (links) => (
    links.map((item, i) => (
        <Link to={item.linkTo} key={i}>
            {item.name}
        </Link>
    ))
)

const UserLayout = (props) => {
    return (
        <div className="container">
            <div className="user_container">
                <div className="user_left_nav">
                    <h2>My account</h2>
                    <div className="links">
                        {generateLinks(links)}
                    </div>
                    {
                        props.user.userdata.isAdmin
                         ?
                            <div>
                                <h2>Admin</h2>
                                <div className="links">
                                    {generateLinks(admin)}
                                </div>
                            </div>
                            : null
                    }

                </div>
                <div className="user_right">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(UserLayout);