export class HtmlElement{
    constructor(config, contentElem) {
        this.name = config.name
        this.placeholder = config.placeholder
        this.options = config.options
        this.contentElem = contentElem

        this.button = document.getElementById(this.name)

        this.button.addEventListener("click", () => {this.new()})

    }

    new(){
        let elem = document.createElement(this.name,this.options)
        elem.innerHTML = this.placeholder
        elem.contentEditable = true
        this.contentElem.append(elem)
    }
}
