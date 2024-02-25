import RescipesComponent from '@/components/ProdcutsComponent'
import React from 'react'

export default function index({ r }) {
    return (
        <RescipesComponent {...r}></RescipesComponent>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    return {
        props: {
            r: data
        }
    }
}