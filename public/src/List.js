export default function List(props) {

    let $list = null
    let $remove = null
    let $label = null
    let $check = null
    let id = props.id

    const render = () => {
        //const {todo, onClickRemove} = props
        //console.log(props);
        $list = document.createElement('div')
        $remove = document.createElement('div')
        $label = document.createElement('div')
        $check = document.createElement('div')

        $remove.addEventListener('click', onClickRemove)
        $check.addEventListener('click', onClickCheck)

        $list.className = 'todo-item'
        $remove.className = 'remove'
        $label.className = 'todo-text'
        $check.className = 'check-mark'

        $remove.append('X')
        $label.append(props.todo.title)
        //props.todo.completed && $check.append('✓')
        $check.append(props.todo.completed ? '✓' : '')
        //$check.append('✓')
        $list.append($remove, $label, $check)

        return $list
    }
    const onClickRemove = () => {
        props.onClickRemove(props.todo.id);
    }
    const onClickCheck = () => {
        console.log("check");
    }

    return render()
}