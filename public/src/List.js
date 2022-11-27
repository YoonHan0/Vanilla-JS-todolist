export default function List(props) {

    let $list = null
    let $remove = null
    let $label = null
    let $check = null

    const render = () => {
        //const {todo, onClickRemove} = props
        $list = document.createElement('div')
        $remove = document.createElement('div')
        $label = document.createElement('div')
        $check = document.createElement('div')

        $remove.className = 'remove'
        $list.className = 'todo-item'
        // $label.className = 'todo-text'
        props.todo.completed ? $label.className = 'checked' : $label.className = 'todo-text'
        $check.className = 'check-mark'

        $remove.append('X')
        $label.append(props.todo.title)
        //props.todo.completed && $check.append('✓')
        $check.append(props.todo.completed ? '✓' : '')
        // $check.append('✓')
        $list.append($remove, $label, $check)

        $remove.addEventListener('click', onClickRemove)
        $list.addEventListener('click', onClickCheck)

        return $list
    }
    const onClickRemove = () => {
        props.onClickRemove(props.todo.id);
    }
    const onClickCheck = () => {
        props.onClickCheck(props.todo.id)
    }

    return render()
}