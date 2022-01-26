const App=()=>{

    return(
        <div>
            <Person name="MartyZAMSON" age={17} hobbies={['cooking','playing soccer']}/>
            <Person name="Steve" age={28} hobbies={['watching movies','hiking']}/>
            <Person name="Jane" age={23} hobbies={['playing piano','modern arts']}/>


        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))