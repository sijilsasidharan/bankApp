import { Customer } from '../../model/customer.model';

export const customer1: Customer = {
    customer_number: 123456,
    name: 'Marko',
    address: 'Street 1',
    phone: 90129321,
    trasfer_details: [{
        reference: 'CUS201909030001',
        transfer_amount: 5000,
        transfer_currency: 'AED',
        benificiary_bank: 'Cerntral Bank',
        beneficiary_account_number: '908977789',
        payment_details: 'Shopping',
    },
    {
        reference: 'CUS201909040001',
        transfer_amount: 6000,
        transfer_currency: 'AED',
        benificiary_bank: 'Dubai Bank',
        beneficiary_account_number: '90897345',
        payment_details: 'Business',
    },
    {
        reference: 'CUS201909060001',
        transfer_amount: 5000,
        transfer_currency: 'AED',
        benificiary_bank: 'Doha Bank',
        beneficiary_account_number: '12327789',
        payment_details: 'Business',
    },
    {
        reference: 'CUS201909070002',
        transfer_amount: 4000,
        transfer_currency: 'MUR',
        benificiary_bank: 'Cerntral Bank',
        beneficiary_account_number: '908977789',
        payment_details: 'Shopping',
    },
    {
        reference: 'CUS201910010001',
        transfer_amount: 6000,
        transfer_currency: 'MUR',
        benificiary_bank: 'Moritius Bank',
        beneficiary_account_number: '123231',
        payment_details: 'Business',
    },
    {
        reference: 'CUS201911010001',
        transfer_amount: 5000,
        transfer_currency: 'MUR',
        benificiary_bank: 'Doha Bank',
        beneficiary_account_number: '12327789',
        payment_details: 'Business',
    }]
}

// export const customer1 = {
//     "responseXML": {
//         "getCustomerInfoResponse": {
//             "getCustomerInfoResult": {
//                 "RETURN_CODE": "0",
//                 "ERROR_MSG": [],
//                 "WARNING_MSG_LIST": [],
//                 "CUST_INFO": {
//                     "CUST_NO": "23423",
//                     "SHORT_NAME": "SHORT.NAME1673948",
//                     "IS_INDIVIDUAL": "Y",
//                     "NATIONALITY": "MU",
//                     "NATIONALITY_NUM": "480",
//                     "NATIONALITY_DESC": "MAURITIUS",
//                     "STREET_ADDR": "STREET-ADDR",
//                     "ADDRESS_LINE2": [],
//                     "ADDRESS_LINE3": [],
//                     "TOWN_COUNTRY": "CUREPIPE",
//                     "POST_CODE": [],
//                     "COUNTRY": "COUNTRY",
//                     "COUNTRY_CODE": "MU",
//                     "COUNTRY_CODE_NUM": "480",
//                     "DESPATCH_CODE": "MA",
//                     "CONTACT_INFO_V7": {
//                         "CONTACT_INFO_V7": {
//                             "COMM_CHANNEL": "BY EMAIL",
//                             "PHONE_LIST_V7": {
//                                 "PHONE_LIST_ITEM_V7": {
//                                     "PHONE": "22222222"
//                                 }
//                             },
//                             "OFFICE_PHONE_LIST_V7": {
//                                 "OFFICE_PHONE_LIST_ITEM_V7": {
//                                     "OFFICE_PHONE": []
//                                 }
//                             },
//                             "FAX_LIST_V7": {
//                                 "FAX_LIST_ITEM_V7": {
//                                     "FAX": []
//                                 }
//                             },
//                             "SMS_LIST_V7": {
//                                 "SMS_LIST_V7": {
//                                     "MOB_OPER_ISO": "48",
//                                     "MOB_OPER_CODE": "ORANGEMU",
//                                     "SMS_FORMATTED": "+230123456789",
//                                     "SMS_LIST_ITEM_V7": {
//                                         "SMS_LIST_ITEM_V7": {
//                                             "SMS": "+230123456789"
//                                         }
//                                     }
//                                 }
//                             },
//                             "EMAIL_LIST_V7": {
//                                 "EMAIL_LIST_ITEM_V7": {
//                                     "EMAIL": "THIS_IS_A_TEST@GMAIL.COM"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }