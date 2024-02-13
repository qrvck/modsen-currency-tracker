import React, { ChangeEvent } from 'react';

import { Container } from '@/components/common/Container';
import { QUOTE_CURRENCY_IDS } from '@/constants/currency';

import { Hint, Select, Wrapper } from './styled';

type ControlPanelProps = Record<string, never>;

interface ControlPanelState {
  date: string;
  currency: string;
}

const getMaxDate = () => {
  const millisecondsIn29Days = 2505600000;
  const date29DaysAgo = new Date(Date.now() - millisecondsIn29Days);
  const fullYear = date29DaysAgo.getFullYear();
  const fullMonth = date29DaysAgo.getMonth() < 10 ? `0${date29DaysAgo.getMonth() + 1}` : date29DaysAgo.getMonth() + 1;
  const fullDate = date29DaysAgo.getDate() < 10 ? `0${date29DaysAgo.getDate()}` : date29DaysAgo.getDate();

  return `${fullYear}-${fullMonth}-${fullDate}`;
};

class ControlPanel extends React.Component<ControlPanelProps, ControlPanelState> {
  constructor(props: ControlPanelProps) {
    super(props);
    this.state = {
      date: '',
      currency: '',
    };

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
  }

  handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value });
  };

  handleChangeCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ currency: e.target.value });
  };

  render() {
    return (
      <section>
        <Container>
          <Wrapper>
            <div>
              <p>select date:</p>
              <input type="date" value={this.state.date} max={getMaxDate()} onChange={this.handleChangeDate} />
              <Hint>started min 30 days ago</Hint>
            </div>

            <div>
              <p>currency:</p>
              <Select value={this.state.currency} onChange={this.handleChangeCurrency}>
                <option value=""></option>
                {QUOTE_CURRENCY_IDS.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Select>
              <Hint>select one</Hint>
            </div>

            <button>APPLY</button>
          </Wrapper>
        </Container>
      </section>
    );
  }
}

export { ControlPanel };
