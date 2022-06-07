import * as React from 'react';
import { l10n } from 'toolkit/extension/utils/toolkit';
import {
  getCurrentAccountId,
  getCurrentBudgetId,
  getLatestTransaction,
} from '../../../../utils/ynab';

export class ImportVenmoButton extends React.Component {
  render() {
    return (
      <button className="button tk-import-venmo" onClick={this.importVenmo}>
        <svg height="16" width="16" id="ember86" className="ynab-new-icon ember-view">
          <use href="#icon_sprite_toolbar_import"></use>
        </svg>
        {l10n('toolkit.importVenmo', 'Bank Import')}
      </button>
    );
  }

  importVenmo = () => {
    const budgetId = getCurrentBudgetId();
    const accountId = getCurrentAccountId();
    // Go back 7 days in case any were missed
    const startDate = getLatestTransaction()?.date?.subtractDays(7)?.format('YYYY-MM-DD');

    window.postMessage(
      {
        type: 'venmo-login',
        context: {
          budgetId,
          accountId,
          startDate,
        },
      },
      '*'
    );
  };
}
