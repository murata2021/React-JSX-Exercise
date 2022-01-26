const App=()=>{
    return (
        <div>
            <Tweet tweets={
                [{username:"test1",name:"user1",date:"randomDate1",message:"my first tweet"},
                {username:"test2",name:"user2",date:"randomDate2",message:"this is first my tweet"},
                {username:"test3",name:"user3",date:"randomDate3",message:"this tweet is awesome. I wrote it btw."}
                ]}/>
                
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))