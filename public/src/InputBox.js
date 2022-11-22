
export default function InputBox(props) {

    const state ={
        value : ""
    }

    let $inputBox = null
    let $input = null
    let $addButton = null


    function render() {
        $inputBox = document.createElement('section')
        $inputBox.id = "inputBox"
        $input = document.createElement('input')
        $addButton = document.createElement('div')
        $addButton.className = 'create-button'

        $input.addEventListener('input', onChangeInput)
        $addButton.addEventListener('click', onClickAddButton)

        $addButton.append("추가")
        $inputBox.append($input, $addButton)

        return $inputBox
    }

    const onChangeInput = (event) => {
        state.value = event.target.value    // 이거는 무슨 용도?
        $input.value = event.target.value   // React에서 이렇게 사용하기 때문에
    }
    /** 추가 버튼 이벤트 */
    const onClickAddButton = () => {
        // console.log($input.value);
        props.onClickCreate($input.value)
    }
    const bindEvent = () => {

    }
    return render()
}