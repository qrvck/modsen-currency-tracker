import React from 'react';

import { Modal } from '@/components/common/Modal';

import {
  DATE_LEGEND_TEXT,
  PRICE_CLOSE_LEGEND_TEXT,
  PRICE_HIGH_LEGEND_TEXT,
  PRICE_LOW_LEGEND_TEXT,
  PRICE_OPEN_LEGEND_TEXT,
  SAVE_BUTTON_TEXT,
  TITLE_TEXT,
} from './constants';
import { Fieldset, SaveButton, Title, Wrapper } from './styled';
import { IFixModalProps } from './types';

class FixModal extends React.Component<IFixModalProps> {
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <Wrapper>
          <Title>{TITLE_TEXT}</Title>

          <Fieldset>
            <p>{DATE_LEGEND_TEXT}</p>
            <select>
              <option value="">дата</option>
            </select>
          </Fieldset>

          <Fieldset>
            <p>{PRICE_OPEN_LEGEND_TEXT}</p>
            <input type="number" />
          </Fieldset>

          <Fieldset>
            <p>{PRICE_CLOSE_LEGEND_TEXT}</p>
            <input type="number" />
          </Fieldset>

          <Fieldset>
            <p>{PRICE_HIGH_LEGEND_TEXT}</p>
            <input type="number" />
          </Fieldset>

          <Fieldset>
            <p>{PRICE_LOW_LEGEND_TEXT}</p>
            <input type="number" />
          </Fieldset>

          <SaveButton>{SAVE_BUTTON_TEXT}</SaveButton>
        </Wrapper>
      </Modal>
    );
  }
}

export { FixModal };
