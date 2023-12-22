import React from 'react'
import styles from "./allinfo.module.scss"

const allinfo = ({product}) => {
  return (
    <div className={`${styles.main}`}>
        <img src={product[0].img} alt={product[0].alt_img} />
        <h1>{product[0].title}</h1>
        <p>{product[0].description}</p>
    </div>
  )
}

export default allinfo;