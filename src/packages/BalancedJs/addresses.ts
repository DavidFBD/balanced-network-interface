import { SupportedChainId as NetworkId } from './chain';

const MAINNET_ADDRESSES = {
  loans: 'cx66d4d90f5f113eba575bf793570135f9b10cece1',
  staking: 'cx43e2eec79eb76293c298f2b17aec06097be606e0',
  dividends: 'cx203d9cd2a669be67177e997b8948ce2c35caffae',
  reserve: 'cxf58b9a1898998a31be7f1d99276204a3333ac9b3',
  daofund: 'cx835b300dcfe01f0bdb794e134a0c5628384f4367',
  rewards: 'cx10d59e8103ab44635190bd4139dbfd682fa2d07e',
  dex: 'cxa0af3165c08318e988cb30993b3048335b94af6c',
  governance: 'cx44250a12074799e26fdeee75648ae47e2cc84219',
  band: 'cxe647e0af68a4661566f5e9861ad4ac854de808a2',
  sicx: 'cx2609b924e33ef00b648a409245c7ea394c467824',
  bnusd: 'cx88fd7df7ddff82f7cc735c871dc519838cb235bb',
  baln: 'cxf61cd5a45dc9f91c15aa65831a30a90d59a09619',
  omm: 'cx1a29259a59f463a67bb2ef84398b30ca56b5830a',
  iusdc: 'cxae3034235540b924dfcc1b45836c293dcc82bfb7',
  usds: 'cxbb2871f468a3008f80b08fdde5b8b951583acf06',
  bwt: 'cxcfe9d1f83fa871e903008471cca786662437e58d',
  airdrip: 'cxaf244cf3c7164fe6f996f398a9d99c4d4a85cf15',
  rebalancing: 'cx40d59439571299bca40362db2a7d8cae5b0b30b0',
};

const YEOUIDO_ADDRESSES = {
  loans: 'cx3259f3ff9a51ca3bf170d4ff9104cf4af126ca1c',
  staking: 'cx9d829396d887f9292d8af488fab78ad24ab6b99a',
  dividends: 'cx5b996d251009340f7c312b9df5c44f0f39a20a91',
  reserve: 'cx1754666c6779dc5e495a462144dd15e4a68fe776',
  daofund: 'cx430955c5a5e2a6e48c1f2aaa7258dc4c84222247',
  rewards: 'cx893fccdd0881d8e2bd2625f711b38e06848ecb89',
  dex: 'cx399dea56cf199b1c9e43bead0f6a284bdecfbf62',
  governance: 'cx483630769b61b76387d6ed90c911c16da546784f',
  band: 'cx61a36e5d10412e03c907a507d1e8c6c3856d9964',
  sicx: 'cxae6334850f13dfd8b50f8544d5acb126bb8ef82d',
  bnusd: 'cxc48c9c81ceef04445c961c5cc8ff056d733dfe3a',
  baln: 'cx36169736b39f59bf19e8950f6c8fa4bfa18b710a',
  omm: 'cx05515d126a47a98c682fa86992329e6c2ec70503',
  iusdc: 'cx65f639254090820361da483df233f6d0e69af9b7',
  usds: 'cxc0666df567a6e0b49342648e98ccbe5362b264ea',
  bwt: 'cx5d886977b7d24b9f73a460c9ca2d43847997c285',
  airdrip: 'cx8ed4fbee9d6497f91ea90933db288ff4b43e54ba',
  rebalancing: 'cx2e3398dfce78a3c83de8a41d7c5f4aa40d3a4f30',
};

const SEJONG_ADDRESSES = {
  loans: 'cx3228124be7c85e3e57edebf870c4075c33c34c5f',
  staking: 'cx1eb5b209e4c6f95a958bddb322d76a2168e576b2',
  dividends: 'cx020042bb8742bfca138889e23817bee87ad8caa0',
  reserve: 'cx76d98fc79f779308d2e872b00e7571bebef59031',
  daofund: 'cx11781737f47520e3bfad0e132c5accb4e4d6fe4f',
  rewards: 'cx026ca90fdcf4851fa6c4e00403b3abe636a9f88b',
  dex: 'cx4342802efce67d2441e69b062b1f0110b6a6f820',
  governance: 'cxdc519895ef110220db2442ff1b3223182304b68a',
  band: 'cxf96a2e83808058fb9159824e324f36d9e91cfafa',
  sicx: 'cx0e706eca3552a6e607095319f4ad8cea37e779d4',
  bnusd: 'cx041714d034919c8456d3606f8766f0169e35cb8e',
  baln: 'cxb45058d398614a7c8cdf7be6f556fa0b39399799',
  omm: '',
  iusdc: '',
  usds: '',
  bwt: 'cxa2afb37647ae91ca6fbf35141b2ef2ac7105720a',
  airdrip: '',
  rebalancing: 'cxd5df399205421930870e3b0798766aa31cffbe66',
};

const addresses = {
  [NetworkId.MAINNET]: MAINNET_ADDRESSES,
  [NetworkId.YEOUIDO]: YEOUIDO_ADDRESSES,
  [NetworkId.SEJONG]: SEJONG_ADDRESSES,
};

export default addresses;
