import React, {useEffect,useState} from 'react'
import { stock } from '../data/stock'
import { pedirDatos } from '../helpers/pedirDatos'
import { ItemList } from './ItemList'



export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState ([])


    useEffect(() => {

        setLoading(true)

        pedirDatos()
        .then((resp) => {
            setProductos(resp)
        })
        .catch( (error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("Finalizado el llamado")
            setLoading(false)
        })
    }, [])



    return (
        <>

            {
                loading ? <h2>Cargando...</h2> 
                : <ItemList productos={productos}></ItemList>
                
            }
        </>
    )
}
