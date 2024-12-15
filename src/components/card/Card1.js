import styles from "./Card.module.css";
const Cart1 = ({ id, name, age, phone, address, type ,deleteHandel}) => {
  return (
    <div
      className={styles.cardwrapper}
      style={{ backgroundColor: type === "men" ? "blue" : "pink" }}
    >
      <div>Name : {name}</div>
      <div>Age : {age}</div>
      <div>Phone : {phone}</div>
      <div>Address : {address}</div>

      <div
        className={styles.deleteBtn}
        onClick={(event) => deleteHandel(event, id)}
      >
        x
      </div>
    </div>
  );
};

export default Cart1;
