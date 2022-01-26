const Person=({name,age,hobbies})=>{

    return (
        <div>
            <h2>- Hello my name is {name}({age})</h2>
            <p>Learn some information about this person</p>
            <h3>{name.length>8?name.slice(0,6):name}</h3>
            <h3>{age>18?'Please go vote!':'You must be 18!'}</h3>
            <h4>Hobbies</h4>

            <ol>
                {hobbies.map(el=><li>{el}</li>)}
            </ol>
            
        </div>
        



    )
}