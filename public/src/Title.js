export default function Title() {

    const render = () => {
        const $title = document.createElement('header')
        const $titleText = document.createElement('h1')

        $titleText.append("To Do List!")
        $title.append($titleText)
        return $title
    }
    return render();
}