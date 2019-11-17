export class Customer {
    customer_number: number;
    name: string;
    address: string;
    phone: number;
    trasfer_details: TransferDetails[];
}

export class TransferDetails {
    reference: string;
    transfer_amount: number;
    transfer_currency: string;
    benificiary_bank: string;
    beneficiary_account_number: string;
    payment_details: string;
}