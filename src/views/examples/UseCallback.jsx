import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './useCallbackButtons';


const UseCallback = props => {
    const [count, setCount] = useState(0)
    
    //sem useCallback, renderiza varias vezes pois considera como uma funcao 'diferente'
    //quando vai passar a funcao para um outro componente
    // const inc = (delta) =>{
    //     setCount(curr => curr + delta)
    // }

    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!" />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
