import Welcome from "./Welcome"

import ProductCard from "./ProductCard"

const App = () => {

  return (
    <>
      <Welcome username="Ahmed" isPremium={false}/>

      <ProductCard name="Shehab" price={1222} description="Using type over interface"/>
    </>
  )
}

export default App