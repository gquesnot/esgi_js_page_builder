"use strict";

import { HtmlElement } from './HtmlElement.js'
import { config } from './config.js'

export class PageBuilder {
  constructor () {
    this.elements = {};
    this.elementsConfig = config
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
