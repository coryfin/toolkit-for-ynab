import * as React from 'react';
import { Feature } from 'toolkit/extension/features/feature';
import { componentReplace } from 'toolkit/extension/utils/react';
import { getSelectedAccount, isCurrentRouteAccountsPage } from 'toolkit/extension/utils/ynab';
import { ImportVenmoButton } from './components/import-venmo-button';

export class ImportVenmo extends Feature {
  shouldInvoke() {
    return isCurrentRouteAccountsPage();
  }

  invoke() {
    const currentAccountName = getSelectedAccount()?.accountName;
    if (!currentAccountName?.toLowerCase().includes('venmo')) {
      this.destroy();
      return;
    }

    if (document.querySelector('.tk-import-venmo')) {
      return;
    }

    const importBtn = document.querySelector('.accounts-toolbar-direct-import-link-account');

    componentReplace(<ImportVenmoButton />, importBtn);
  }

  destroy() {
    $('.tk-import-venmo').remove();
  }

  onRouteChanged() {
    if (this.shouldInvoke()) {
      this.invoke();
    }
  }
}
