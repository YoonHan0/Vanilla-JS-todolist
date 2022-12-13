export default function List(props) {

    let $list = null
    let $remove = null
    let $label = null
    let $update = null
    let $check = null

    const render = () => {
        //const {todo, onClickRemove} = props
        $list = document.createElement('div')
        $remove = document.createElement('div')
        $label = document.createElement('div')
        $update = document.createElement('i')
        $check = document.createElement('div')

        $remove.className = 'remove'
        $list.className = 'todo-item'
        props.todo.completed ? $label.className = 'checked' : $label.className = 'todo-text'
        props.todo.completed ? $update.className = 'update_btn' : $update.className = 'fa-solid fa-pen-nib'
        $check.className = 'check-mark'

        $remove.append('X')
        $label.append(props.todo.title)
        $check.append(props.todo.completed ? '✓' : '')
        $list.append($remove, $label, $update, $check)

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