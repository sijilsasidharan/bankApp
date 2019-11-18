import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class NewTransaction {

    getReference(): ElementFinder {
        return element(by.id('reference'))
    }

    getCustomerNumber(): ElementFinder {
        return element(by.id('customer_number'))
    }

    getName(): ElementFinder {
        return element(by.id('name'))
    }

    getAddress(): ElementFinder {
        return element(by.id('address'))
    }

    getPhone(): ElementFinder {
        return element(by.id('phone'))
    }

    getTransferAmount(): ElementFinder {
        return element(by.id('transfer_amount'))
    }

    getTransferCurrency(): ElementFinder {
        return element(by.id('transfer_currency'))
    }

    getBenificiaryBank(): ElementFinder {
        return element(by.id('benificiary_bank'))
    }

    getBeneficiaryAccountNumber(): ElementFinder {
        return element(by.id('beneficiary_account_number'))
    }

    getPaymentDetails(): ElementFinder {
        return element(by.id('payment_details'))
    }

    getTransactionButton(): ElementFinder {
        return element(by.buttonText('Transfer amount'));
    }
}