type Cards =  {
    name: string
    price: number
    description? : string
}

const ProductCard = (props : Cards) => {
  return (
    <div>

        <p>{props.name.toUpperCase()}</p>
        <p>{props.price}</p>
        <p>{props.description}</p>

    </div>
  )
}

export default ProductCard