import Card from "../card/Card1"
const CartList = ({ names ,deleteHandel}) => {
    return (
        <div>
            {names.map(({id,...otherProps}) => {
                return (
                    <Card key={id}
                        id={ id}
                    
                    {...otherProps}
                    deleteHandel={deleteHandel}
                    ></Card>
                )
            })}
        </div>
    )
}

export default CartList