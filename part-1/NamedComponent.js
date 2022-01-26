const NamedComponent=(props)=>{
    let name;
    return (
        <p>
            My name is {props.name?props.name:'Joe Doe'}
        </p>
    )
}