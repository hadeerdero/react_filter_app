import { useEffect, useState} from 'react';
const UseCustom = (url) => {
    const [x,setX] = useState([])
    useEffect(() => {
  fetch(url)
      .then(response => response.json())
      .then(json => setX(json))
    }, [])
    return [x]
}

export default UseCustom
// 'https://jsonplaceholder.typicode.com/todos/'