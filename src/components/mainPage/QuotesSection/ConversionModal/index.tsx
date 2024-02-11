import React from 'react';

import { Modal } from '@/components/common/Modal';

import { IConversionModal } from './types';

function ConversionModal({ currencyID, onClose }: IConversionModal) {
  return (
    <Modal onClose={onClose} isOpen={Boolean(currencyID)}>
      <p>{currencyID}</p>
    </Modal>
  );
}

export { ConversionModal };
