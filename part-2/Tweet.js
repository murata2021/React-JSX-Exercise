const Tweet=({tweets})=>{
    console.log(tweets)

    return (

        <div>
            <ol>
                {tweets.map((el)=>{
                    return (
                    <li>
                        <p>Username: {el.username}</p>
                        <p>name: {el.name}</p>
                        <p>message: {el.message}</p>
                        <p>date: {el.date}</p>

                    </li>)
                })}
            </ol>
            
        </div>
    )
}