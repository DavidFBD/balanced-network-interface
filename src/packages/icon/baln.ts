import { nid } from '.';
import addresses from '../../constants/addresses';
import { IconWrapper } from './iconWrapper';

export class BALN extends IconWrapper {
  constructor(public account: string) {
    super(nid);
    this.address = addresses[this.nid].bal;
  }

  balanceOf() {
    const callParams = this.paramsBuilder({
      method: 'balanceOf',
      params: {
        _owner: this.account,
      },
    });

    return this.call(callParams);
  }

  getLiquidityBALNSupply() {
    const callParams = this.paramsBuilder({
      method: 'balanceOf',
      params: {
        _owner: this.account,
        _id: this.address,
      },
    });

    return this.call(callParams);
  }
}
