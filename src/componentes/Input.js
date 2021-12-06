const Input = (props) => { 

    const {type, id, className, state, setState, ...rest} = props
    
    return (
        <div>
            <input 
                
                type={type}
                id={id}
                className={className}
                state={state}
                onChange={e=>setState(e.target.value)}
                {...rest}
            />
        </div>
    )
}

export default Input

