import { useState, useEffect } from 'react'

export default function App() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [text, setText] = useState('')

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

        return await response.json()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, {
            id: todos.length + 1,
            title: text,
            completed: false
        }]);

        setText('');
    }

    useEffect(() => {
        fetchData().then(data => {
            setTodos(data)
            console.log(data)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    return (
        <div className="container">
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <form onSubmit={handleSubmit}>
                <h1>My Todos</h1>
                <div>
                    <input type="text" value={text} onChange={(e) => {
                        setText(e.target.value)
                    }} />
                    <button type="submit">Add</button>
                </div>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }} onClick={() => {
                        setTodos(todos.map(item => {
                            if (item.id === todo.id) {
                                return {
                                    ...item,
                                    completed: !item.completed
                                }
                            }

                            return item
                        }))
                    }}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}
