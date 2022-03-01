
class newPastePage {
  get tagSyntax() {
    return $('(//a[@class="btn -small h_800"])[1]');   
  }; 
  get textOfNewPaste() {
    return $('//ol[@class="text"]');
  };
  
  async getTextOfNewPaste() {    
    let elem = await this.textOfNewPaste; 
    let textOfNewPaste = await elem.getText();
    return textOfNewPaste;  
  };
  async getTextOfTagSyntax() {    
    let elem = await this.tagSyntax; 
    let textOfTagSyntax = await elem.getText();
    return textOfTagSyntax;  
  };
};

module.exports = new newPastePage();

