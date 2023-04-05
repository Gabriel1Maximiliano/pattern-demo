import styles from "../styles/styles.module.css";
import image1 from "../../assets/shop-assets/products/100042307_0_2000.jpg";
import { useState } from "react";

export const ProductCard = () => {

  const [ counter, setCounter ] = useState<number>(0);

  const handleIncreaseBy = ( value: number ) => {

    setCounter((prev) => Math.max( prev + value, 0 ));

  };

  return (

    <div className={styles.productCard}>
      <img className={styles.productCard} src={image1} alt="product-1" />
      <span className={styles.productDescription}>T-shirt</span>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonSubstraction}
          onClick={() => handleIncreaseBy(-1)}
        >
          {" "}
          -{" "}
        </button>

        <div className={styles.countLabel}> { counter } </div>

        <button
          className={styles.buttonAdd}
          onClick={() => handleIncreaseBy(1)}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};