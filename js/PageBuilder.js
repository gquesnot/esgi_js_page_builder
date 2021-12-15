"use strict";

import { HtmlElement } from './HtmlElement.js'

export class PageBuilder {
  constructor () {
    this.elements = {};
    this.elementsConfig = [
      {
        name: 'h1',
        options: undefined,
        placeholder: 'Saisir le titre principal/h1',
        editable: true

      },
      {
        name: 'h2',
        options: undefined,
        placeholder: 'Saisir le titre niveau 2/h2',
        editable: true

      },
      {
        name: 'h3',
        options: undefined,
        placeholder: 'Saisir le titre niveau 3 / h3',
        editable: true

      },
      {
        name: 'p',
        options: undefined,
        placeholder: 'Saisir le paragraphe de text',
        editable: true

      },
      {
        name: 'hr',
        options: undefined,
        placeholder: '',
        editable: false

      }
    ];
    this.contentElem = document.getElementById('content');
    this.btnExport = document.getElementById('export');
    this.popup = document.getElementById('popup');

    for (const elementConfig of this.elementsConfig) { this.elements[elementConfig.name] = new HtmlElement(elementConfig, this.contentElem) }

    this.btnExport.addEventListener('click', () => { this.exportHtml() });
    this.popup.addEventListener('dblclick', () => { this.popup.classList.add('hide') });
  }

  exportHtml () {
    // reset popup
    this.popup.innerHTML = '';

    let resText = '';
    const resDiv = document.createElement('div');

    for (const child of this.contentElem.children) {
      const tagName = child.tagName.toLowerCase();
      resText += '<' + tagName + '>\n';
      if (this.elements[tagName].editable) {
        resText += child.innerHTML + '\n' +
                    '</' + tagName + '>\n';
      }
    }
    // append popup
    resDiv.innerText = resText;
    this.popup.append(resDiv);
    this.popup.classList.remove('hide');
  }
}
