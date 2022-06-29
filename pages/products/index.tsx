import { GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react'

type ProductProps = {
  products: any[];
}

const Products = ({products}: ProductProps) => {
  if(!products) return null;
  return (
    <div>
     {products.map((item)=> (
      <div key={item.id}>{item.name}</div>
     ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  console.log("Get static props - server");
  const data = await (await fetch('http://localhost:3001/products')).json();
  return {
    props: {
      products: data
    }
  }
}

export default Products