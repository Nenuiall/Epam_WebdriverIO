
class HomePage {   
  get newPasteForm() {
    return $('//textarea[@id="postform-text"]');
  };  
  get pasteNameForm() {
    return $('//input[@id="postform-name"]');
  }; 
  get pasteBtn() {
    return $('//button[@class="btn -big"]');       
  };
  get syntaxHighlightingMenu() {
    return $('(//span[@id="select2-postform-format-container"]');
  };
  get syntaxHighlightingField() {
    return $('//input[@role="searchbox"]');  
  };
  get pasteExpirationMenu() {
    return $('//span[@id="select2-postform-expiration-container"]');    
  };
  get optionOfpasteExpirationMenu() {
    return $('//*[@id="select2-postform-expiration-result-nclx-10M"]');       
  };

  async openPastePage() {
    await browser.url('https://pastebin.com/'); 
  }; 
  async clickPasteBtn() {
    let pasteBtn = await this.pasteBtn;
    await pasteBtn.click();    
  };   
  async selectSyntaxHighlighting(text) {
    let syntaxHighlighting = await this.syntaxHighlightingMenu;
    await syntaxHighlighting.click();    
    let syntaxField = await this.syntaxHighlightingField;
    await syntaxField.setValue(text);   
  };
  async selectPasteExpiration() {
    let pasteExpiration = await this.pasteExpirationMenu;
    await pasteExpiration.click();
    let pasteExpirationMenu = await this.optionOfpasteExpirationMenu;
    await pasteExpirationMenu.click();
  };  
  async sendNewPasteFormText(text) {
    let pasteFormText = await this.newPasteForm;
    await pasteFormText.setValue(text);
  };
  async sendPasteNameFormText(title) {    
    let pasteNameFormText = await this.pasteNameForm;
    await pasteNameFormText.setValue(title);
  };  
};

module.exports = new HomePage();

