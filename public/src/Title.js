export default function Title() {

    const render = () => {
        const $title = document.createElement('header')
        const $titleText = document.createElement('h1')

        $titleText.append("오늘 할 일")
        $title.append($titleText)
        return $title
    }
    return render();
}