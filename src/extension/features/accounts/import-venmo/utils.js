export class TransactionConverter {
  static venmoToYNAB(transaction) {
    const date = transaction.datetime_created.split('T')[0];
    const inflow = transaction.balance_increase;
    const amount = transaction.amount * 1000 * (inflow ? 1 : -1);
    return {
      date,
      amount,
      payee_name: TransactionConverter._getPayeeName(transaction),
      memo: transaction.note,
      import_id: `YNAB:${amount}:${date}:1`,
    };
  }

  static _getPayeeName(transaction) {
    const inflow = transaction.balance_increase;
    const payment = transaction.payment;

    const isDebitCharge = !inflow && payment.action === 'charge';
    const isCreditPayment = inflow && payment.action === 'pay';

    // Debit charge: other party sent the charge
    // Credit payment: other party sent the payment
    if (isDebitCharge || isCreditPayment) {
      return payment.actor.display_name;
    }

    // Otherwise,
    // Debit payment: I sent the payment
    // Credit charge: I sent the charge
    return payment.target.merchant || payment.target.user.display_name;
  }
}
