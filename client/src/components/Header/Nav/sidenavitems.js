import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

const SidenavItems = ({user}) => {

    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Home',
            link:'/',
            restricted:false
        },
        {
            type:'navItem',
            icon:'user',
            text:'My Profile',
            link:'/user',
            restricted:true
        },
        {
            type:'navItem',
            icon:'briefcase',
            text:'Add Admins',
            link:'/user/register',
            restricted:true
        },
        {
            type:'navItem',
            icon:'unlock-alt',
            text:'Login',
            link:'/login',
            restricted:false,
            exclude:true
        },
        {
            type:'navItem',
            icon:'check',
            text:'My reviews',
            link:'/user/user-reviews',
            restricted:true
        },
        {
            type:'navItem',
            icon:'book',
            text:'Add reviews',
            link:'/user/add',
            restricted:true
        },
        {
            type:'navItem',
            icon:'power-off',
            text:'Logout',
            link:'/user/logout',
            restricted:true
        }
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
            items.map((item,i)=>{              return element(item,i)
    })
    )

    return (
        <div>
            {showItems()}
        </div>
    );
};

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(SidenavItems)