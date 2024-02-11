import React from 'react';

import { Modal } from '@/components/common/Modal';

import { IConversionModal } from './types';

function ConversionModal({ quote, onClose }: IConversionModal) {
  return (
    <Modal onClose={onClose} isOpen={Boolean(quote)}>
      <p>{quote}</p>
    </Modal>
  );
}

export { ConversionModal };
