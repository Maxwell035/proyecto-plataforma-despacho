const Input = (props) => { 

    const {type, id, className, value, state, setState, ...rest} = props
    
    return (
        <div>
            <input 
                
                type={type}
                id={id}
                className={className}
                placeholder={value}
                state={state}
                onChange={e=>setState(e.target.value)}
                {...rest}
            />
        </div>
    )
}

export default Input

