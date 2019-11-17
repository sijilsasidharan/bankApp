import { Customer } from '../../model/customer.model';

export const customer2: Customer = {
    customer_number: 123457,
    name: 'Smith',
    address: 'Street 2',
    phone: 9827364,
    trasfer_details: [
        {
            reference: 'CUS201909031001', transfer_amount: 4000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Cerntral Bank',
            beneficiary_account_number: '908977789',
            payment_details: 'Shopping',
        },
        {
            reference: 'CUS201909051001', transfer_amount: 6000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Moritius Bank',
            beneficiary_account_number: '123231',
            payment_details: 'Business',
        },
        {
            reference: 'CUS201909201001', transfer_amount: 5000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Doha Bank',
            beneficiary_account_number: '12327789',
            payment_details: 'Business',
        },
        {
            reference: 'CUS201910011001', transfer_amount: 4000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Cerntral Bank',
            beneficiary_account_number: '908977789',
            payment_details: 'Shopping',
        },
        {
            reference: 'CUS201910101001', transfer_amount: 6000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Moritius Bank',
            beneficiary_account_number: '123231',
            payment_details: 'Business',
        },
        {
            reference: 'CUS201910121001', transfer_amount: 5000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Doha Bank',
            beneficiary_account_number: '12327789',
            payment_details: 'Business',
        },
        {
            reference: 'CUS201910151001', transfer_amount: 4000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Cerntral Bank',
            beneficiary_account_number: '908977789',
            payment_details: 'Shopping',
        },
        {
            reference: 'CUS201910301001', transfer_amount: 6000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Moritius Bank',
            beneficiary_account_number: '123231',
            payment_details: 'Business',
        },
        {
            reference: 'CUS201911051001', transfer_amount: 5000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Doha Bank',
            beneficiary_account_number: '12327789',
            payment_details: 'Business',
        },
        {
            reference: 'CUS201911121001', transfer_amount: 4000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Cerntral Bank',
            beneficiary_account_number: '908977789',
            payment_details: 'Shopping',
        },
        {
            reference: 'CUS201911121002', transfer_amount: 6000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Moritius Bank',
            beneficiary_account_number: '123231',
            payment_details: 'Business',
        },
        {
            reference: 'CUS201911121003', transfer_amount: 5000,
            transfer_currency: 'MUR',
            benificiary_bank: 'Doha Bank',
            beneficiary_account_number: '12327789',
            payment_details: 'Business',
        }
    ]
}
// export const customer2 = {
//     "responseXML": {
//         "getCustomerInfoResponse": {
//             "getCustomerInfoResult": {
//                 "RETURN_CODE": "0",
//                 "ERROR_MSG": [],
//                 "WARNING_MSG_LIST": [],
//                 "CUST_INFO": {
//                     "CUST_NO": "23424",
//                     "SHORT_NAME": "SHORT.NAME1673944",
//                     "IS_INDIVIDUAL": "Y",
//                     "NATIONALITY": "UK",
//                     "NATIONALITY_NUM": "481",
//                     "NATIONALITY_DESC": "UNITED KINGDOM",
//                     "STREET_ADDR": "STREET-ADDR",
//                     "ADDRESS_LINE2": [],
//                     "ADDRESS_LINE3": [],
//                     "TOWN_COUNTRY": "CUREPIPE",
//                     "POST_CODE": [],
//                     "COUNTRY": "COUNTRY",
//                     "COUNTRY_CODE": "UK",
//                     "COUNTRY_CODE_NUM": "481",
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