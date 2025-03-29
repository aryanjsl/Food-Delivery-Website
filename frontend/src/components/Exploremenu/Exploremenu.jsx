import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setCatergory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Feast Your Eyes on Our Menu</h1>
      <p className='explore-menu-text'>Indulge in a delightful selection of carefully crafted dishes, made with the freshest ingredients and bursting with flavors. From comforting classics to exciting new flavors, our menu has something to satisfy every craving. Take a look and let your taste buds lead the way! 🍽️✨</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
          return (
            <div onClick={()=>setCatergory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
             <img className={category===item.menu_name?"active":""}  src={item.menu_image} alt="" />
             <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu
