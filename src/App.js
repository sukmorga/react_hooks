import useInput from "./hooks/useInput";


function App() {
    const username = useInput('');
    const password = useInput('');


    return (
        <div>
            <input {...username} type='text' placeholder="username" />
            <input {...password} type='text' placeholder="password" />
            <button onClick={() => console.log(username.value, password.value)}>Click</button>
        </div>
    );
}

export default App;
