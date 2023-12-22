import React from 'react'
import styles from './sidebar.module.scss'

const sidebar = ({product,currentHandler,activeClass}) => {
  const clickHandler=()=>{
    currentHandler(product.id);

  }
  let activecurrent;
  if(activeClass){
    activecurrent=styles.active;
  }
  else{
    activecurrent="";
  }
  return (
    <div className= {`${styles.sidebar} ${activecurrent}`} onClick={clickHandler}>
        <img src={product.thumb_img} alt={product.alt_img} />
        <h3>{product.title}</h3>
    </div>
  )
}

export default sidebar