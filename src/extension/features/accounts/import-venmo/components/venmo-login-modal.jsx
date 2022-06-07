import React from 'react';
import { Modal } from 'toolkit/components/modal';

export function VenmoLoginModal({ isOpen, setIsOpen }) {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Modal
      className="venmo-login__modal"
      isOpen={isOpen && !isLoading}
      setIsOpen={setIsOpen}
      title="Login to Venmo"
    >
      <div className="venmo-login__instructions">Placeholder for Venmo login page</div>
    </Modal>
  );
}
