/*При выполнении задания необходимо использовать возможности Selenium WebDriver, 
юнит-тест фреймворка и концепцию Page Object. Автоматизировать следующий сценарий:
Открыть https://pastebin.com или аналогичный сервис в любом браузере
Создать New Paste со следующими деталями:
* Код: "Hello from WebDriver"
* Paste Expiration: "10 Minutes"
* Paste Name / Title: "helloweb"*/

const HomePage = require('../../pages/pasteHome.page');
const newPastePage = require('../../pages/newPaste.page'); 
const chai = require('chai');
const {expect} = require('chai');

describe('Pastebin test', async function() { 
    const pasteFormText = 'Hello from WebDriver'; 
    const pasteNameFormText = 'helloweb';

    it('code should be equal the entered', async function() {
        await HomePage.openPastePage();    
        await HomePage.sendNewPasteFormText(pasteFormText);
        await HomePage.sendPasteNameFormText(pasteNameFormText);    
        await HomePage.selectPasteExpiration();             
        await HomePage.clickPasteBtn();         
        
        let actualCod = await newPastePage.getTextOfNewPaste();
        await expect(actualCod).to.equal(pasteFormText);
    });

    it('page title should be "helloweb"', async function() {    
        let actualTitle = await browser.getTitle();
        await expect(actualTitle).to.equal(pasteNameFormText);       
    });
});  

