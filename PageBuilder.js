"use strict"

import {HtmlElement} from "./HtmlElement.js";

export class PageBuilder{
    elementsConfig = [
        {
            name: "h1",
            options : undefined,
            placeholder: "Saisir le titre principal/h1"
        },
        {
            name: "h2",
            options : undefined,
            placeholder: "Saisir le titre niveau 2/h2"
        },
        {
            name: "h3",
            options : undefined,
            placeholder: "Saisir le titre niveau 3 / h3"
        },
        {
            name: "p",
            options : undefined,
            placeholder: "Saisir le paragraphe de text"
        },
        {
            name: "hr",
            options : undefined,
            placeholder: ""
        }
    ]

    elements = {}
    constructor() {
        this.contentElem = document.getElementById("content")
        this.btnExport = document.getElementById("export")
        this.popup = document.getElementById("popup")

        for (const elementConfig of this.elementsConfig) {
            console.log(elementConfig)
            this.elements[elementConfig.name] = new HtmlElement(elementConfig,this.contentElem )
        }

        this.btnExport.addEventListener("click", () => {this.exportHtml()})
        this.popup.addEventListener("dblclick", ()=>{this.popup.classList.add('hide')})
    }

    exportHtml(){
        this.popup.innerHTML = ""
        let resDiv = document.createElement("div")
        let resText  = ""
        for (let child of this.contentElem.children) {
            resText += `
                                    <${child.tagName.toLowerCase()}>
                        ${child.innerHTML}
                    </${child.tagName.toLowerCase()}>
            `
        }
        resDiv.innerText = resText;
        this.popup.append(resDiv)
        this.popup.classList.remove("hide")

    }

}
