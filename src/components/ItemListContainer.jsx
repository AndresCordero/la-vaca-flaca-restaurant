const ItemListContainer = (props) => {
    console.log(props)
    return(
        <div>
            <h1 className="mt-5 text-center">{props.greeting}</h1>
        </div>
    )
}


export default ItemListContainer