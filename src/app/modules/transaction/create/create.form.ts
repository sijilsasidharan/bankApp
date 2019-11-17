
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms'
//utils
import { ONLY_NUMBERS, ONLY_STRINGS } from '../../../utils/regex-patters'
export class CreateTransactionForm {
    protected createForm: FormGroup;
    constructor(formBuilder: FormBuilder) {
        this.createForm = formBuilder.group({
            reference: ['', Validators.required],
            customer_number: ['', Validators.required],
            name: ['', Validators.required],
            address: ['', Validators.required],
            phone: [null, [Validators.required, Validators.pattern(ONLY_NUMBERS)]],
            transfer_amount: [null, [Validators.required, Validators.pattern(ONLY_NUMBERS)]],
            transfer_currency: [null, Validators.required],
            benificiary_bank: [null, [Validators.required, Validators.pattern(ONLY_STRINGS)]],
            beneficiary_account_number: [null, Validators.required],
            payment_details: [null, [Validators.required, Validators.pattern(ONLY_STRINGS)]]
        })
    }

    get reference(): AbstractControl {
        return this.createForm.get('reference')
    }

    get customer_number(): AbstractControl {
        return this.createForm.get('customer_number')
    }

    get name(): AbstractControl {
        return this.createForm.get('name')
    }
    get address(): AbstractControl {
        return this.createForm.get('address')
    }

    get phone(): AbstractControl {
        return this.createForm.get('phone')
    }

    get transfer_amount(): AbstractControl {
        return this.createForm.get('transfer_amount')
    }

    get transfer_currency(): AbstractControl {
        return this.createForm.get('transfer_currency')
    }

    get benificiary_bank(): AbstractControl {
        return this.createForm.get('benificiary_bank')
    }

    get beneficiary_account_number(): AbstractControl {
        return this.createForm.get('beneficiary_account_number')
    }

    get payment_details(): AbstractControl {
        return this.createForm.get('payment_details')
    }
}