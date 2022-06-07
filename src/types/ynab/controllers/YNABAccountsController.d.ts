import { YNABTransaction } from 'toolkit/types/ynab/data/transaction';

interface YNABAccountsController {
  selectedAccountId: string;
  accountViewModel: {
    getSortedAndFilteredTransactions(): YNABTransaction[];
  };
}
