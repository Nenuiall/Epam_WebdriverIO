/*При выполнении задания необходимо использовать возможности Selenium WebDriver, 
юнит-тест фреймворка и концепцию Page Object. Автоматизировать следующий сценарий:

1. Открыть https://cloud.google.com/
2. Нажав кнопку поиска по порталу вверху страницы, ввести в поле поиска"Google Cloud Platform Pricing Calculator"
3. Запустить поиск, нажав кнопку поиска.
4. В результатах поиска кликнуть "Google Cloud Platform Pricing Calculator" и перейти на страницу калькулятора.
5. Активировать раздел COMPUTE ENGINE вверху страницы
6. Заполнить форму следующими данными:
    * Number of instances: 4
    * What are these instances for?: оставить пустым
    * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
    * VM Class: Regular
    * Instance type: n1-standard-8    (vCPUs: 8, RAM: 30 GB)
    * Выбрать Add GPUs
        * Number of GPUs: 1
        * GPU type: NVIDIA Tesla V100
    * Local SSD: 2x375 Gb
    * Datacenter location: Frankfurt (europe-west3)
    * Commited usage: 1 Year
7. Нажать Add to Estimate
8. Проверить соответствие данных следующих полей: VM Class, Instance type, Region, local SSD, commitment term
9. Проверить что сумма аренды в месяц совпадает с суммой получаемой при ручном прохождении теста.*/

const GoogleCloudPage =  require('../../pages/googleCloud.page');
const PricingCalculatorPage = require('../../pages/pricingCalculator.page');
const chai = require('chai');
const {expect} = require('chai');

describe('Google cloud test', async function() {    

  it('VM Class should be "regular"', async function() {     
    await GoogleCloudPage.goToPricingCalculatorPage();
    await PricingCalculatorPage.fillCalculatorForm();

    let expectedVmClass = 'VM class: regular';
    let actualVmClass = await PricingCalculatorPage.getTextOfVmClass();
    await expect(actualVmClass).to.equal(expectedVmClass);
  });

  it('Instance type should be "n1-standard-8"', async function() {
    let expectedInstanceType = 'Instance type: n1-standard-8\nCommitted Use Discount applied';
    let actualInstanceType = await PricingCalculatorPage.getTextOfInstanceType();
    await expect(actualInstanceType).to.equal(expectedInstanceType);            
  }); 

  it('Region should be "Frankfurt"', async function() {
    let expectedRegion = 'Region: Frankfurt';
    let actualRegion = await PricingCalculatorPage.getTextOfRegion();
    await expect(actualRegion).to.equal(expectedRegion);
  });

  it('Local SSD should be "2x375 GiB"', async function() {
    let expectedLocalSsd = 'Local SSD: 2x375 GiB\nCommitted Use Discount applied';
    let actualLocalSsd = await PricingCalculatorPage.getTextOfLocalSsd();
    await expect(actualLocalSsd).to.equal(expectedLocalSsd);
  });

  it('Commitment term should be "1 Year"', async function() {
    let expectedCommitmentTerm = 'Commitment term: 1 Year';
    let actualCommitmentTerm = await PricingCalculatorPage.getTextOfCommitmentTerm();
    await expect(actualCommitmentTerm).to.equal(expectedCommitmentTerm);
  });  

  it('Estimated Cost should be "1,082.77 USD per 1 month"', async function() {
    let costByManualTesting = 'Estimated Component Cost: USD 1,082.77 per 1 month';
    let actualCost = await PricingCalculatorPage.getTextOfEstimatedCost();
    await expect(actualCost).to.equal(costByManualTesting);
  });
});  

