import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'numberMultiplySeven':
            return { ...state, number: state.number * 7 }
        case 'numberDivideby25':
            return { ...state, number: state.number / 25 }
        case 'numberToIntenger':
            return { ...state, number: parseInt(state.number) }
        case 'addNToNumber':
            return { ...state, number: state.number + action.payload}

        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? (
                    <span className="text">{state.user.name}</span>
                ) : (
                    <span className="text">Sem usuario</span>
                )}

                <span className="text">{state.number}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'login', payload: ['Maria', 'Joao'] })}
                    >Login
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}
                    >+2</button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberMultiplySeven' })}
                    >*7</button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberDivideby25' })}
                    >/25</button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberToIntenger' })}
                    >Int</button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'addNToNumber', payload :11 })}
                    >11</button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'addNToNumber', payload :-5 })}
                    >-5</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
