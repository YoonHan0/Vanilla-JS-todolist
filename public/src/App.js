import InputBox from "./InputBox.js"
import ListBox from "./ListBox.js"
import Title from "./Title.js"

export default function App($target) {

    let state = {
        inputValue : "",
        todoList : []
    }
    let $main = null
    let $title = null
    let $inputBox = null
    let $listBox = null

    // api 불러오기 getTodoList()
    const getTodoList = async () => {
        const api = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data =  await api.json()
        setTodoList(data.filter((e, index) => index < 10));
    }
    const handleClickCreate = (value) => {
        let lastId = state.todoList[state.todoList.length-1].id
        let addData = {
            id : lastId+1,
            userId : 1,
            title : value,
            completed : false
        }
        let addTodoList = state.todoList.concat(addData) 
        //console.log(lastId)
        setTodoList(addTodoList)
    }
    const handleClickRemove = (id) => {
        const newTodoList = state.todoList.filter(e => e.id !== id)
        setTodoList(newTodoList)
    
    }
    const handleClickCheck = (checkValueId) => {       // 체크
        const newTodoList = state.todoList.map(e => {
            if(e.id === checkValueId) {
                if(e.completed) {
                    e.completed = false
                }
                else {
                    e.completed = true
                }
            }
            return e;
        })
        setTodoList(newTodoList)
    }
    

    const setTodoList = (todoList) => {
        state = {...state, todoList}    // 전개연산자를 이렇게 쓰면 앞의 Object형태를 뒤에꺼로 덮음
        render()
    }
    const render = () => {
        
        const preMain = document.getElementsByClassName('main')[0]
        $main = document.createElement("div")
        $main.className = "main"

        $title = new Title()
        $inputBox = new InputBox({
            onClickCreate : handleClickCreate
        })
        $listBox = new ListBox({
            todoList : state.todoList,
            onClickRemove : handleClickRemove,
            onClickCheck :handleClickCheck
        })

        $main.append($title)
        $main.append($inputBox)
        $main.append($listBox)

        if(preMain) {
            preMain.replaceWith($main)
        }
        else {
            $target.append($main)
        }
    }
    const createMainDom = () => {
        $main = document.createElement('div')
    }
    const init = () => {
        createMainDom()
        getTodoList()
    }
    init()
}