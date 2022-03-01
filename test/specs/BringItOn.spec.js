/*При выполнении задания необходимо использовать возможности Selenium WebDriver, 
юнит-тест фреймворка и концепцию Page Object. Автоматизировать следующий сценарий:
Открыть "https://pastebin.com"  или аналогичный сервис в любом браузере
Создать New Paste со следующими деталями:
* Код:
git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force
* Syntax Highlighting: "Bash"
* Paste Expiration: "10 Minutes"
* Paste Name / Title: "how to gain dominance among developers"
3. Сохранить paste и проверить следующее:
* Заголовок страницы браузера соответствует Paste Name / Title
* Синтаксис подвечен для bash
* Проверить что код соответствует введенному в пункте 2*/

const HomePage = require('../../pages/pasteHome.page');
const newPastePage = require('../../pages/newPaste.page'); 
const chai = require('chai');
const {expect} = require('chai');

describe('Pastebin test', async function() { 
  const pasteFormText = 'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force';
  const pasteNameFormText = 'how to gain dominance among developers';
  
  it('syntax should be "bash"', async function() {    
    await HomePage.openPastePage();    
    await HomePage.sendNewPasteFormText(pasteFormText);
    await HomePage.sendPasteNameFormText(pasteNameFormText);
    await HomePage.selectSyntaxHighlighting('Bash\n');
    await HomePage.selectPasteExpiration(); 
    await HomePage.clickPasteBtn();

    let expectedSyntax = 'bash';
    let actualSyntax = await newPastePage.getTextOfTagSyntax();      
    await expect(actualSyntax).to.equal(expectedSyntax);     
  });

  it('page title should be "how to gain dominance among developers"', async function() {     
    let actualTitle = await browser.getTitle();
    await expect(actualTitle).to.equal(pasteNameFormText);       
  });

  it('code should be equal the entered', async function() {    
    let actualCod = await newPastePage.getTextOfNewPaste();
    await expect(actualCod).to.equal(pasteFormText);    
  });
});
 
