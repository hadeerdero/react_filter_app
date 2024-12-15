import React, { useState } from "react";
import styles from "./filter.module.css"
const Filter = ({ filtration}) => {
    const [filter, setFilter] = useState("")
    const handelFiltraton = (e) => {
        const filterValue = e.target.value
        setFilter(filterValue)
        filtration(filterValue)
        console.log(filter)
    }
    return (
        <div className={ styles.mp}>
            <input type="texr" placeholder='test for ref' value={filter} onChange={handelFiltraton}/>

        </div>
    )
}

export default Filter