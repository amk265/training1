import React, { useState } from "react";
import Sidebar from "./sidebar";
import Allinfo from "./allinfo";
import styles from "./Product_Introduction.module.scss";

const Product_Introduction = ({ items }) => {
  let activecurrent;
  const [Current_productId, setCurrent_ProductId] = useState(0);
  const current = (id) => {
    setCurrent_ProductId(id);
  };
  let Current_product = [
    {
      id: 0,
      title: "",
      img: "#",
      alt_img: "",
      thumb_img: "#",
      description: "",
    },
  ];
  if (Current_productId != 0) {
    Current_product = items.filter((item) => {
      return item.id == Current_productId;
    });
  }
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.menu}`}>
        {items.map((item) => {
          if (item.id == Current_productId) {
            activecurrent = true;
          } else {
            activecurrent = false;
          }
          return (
            <Sidebar
              key={item.id}
              product={item}
              currentHandler={current}
              activeClass={activecurrent}
            />
          );
        })}
      </div>
      <div className={`${styles.des}`}>
        <Allinfo product={Current_product} />
      </div>
    </div>
  );
};

export default Product_Introduction;
