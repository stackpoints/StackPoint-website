export const tokenConfig = {
  name: 'StackPoints',
  symbol: 'STP',
  totalSupply: '1,000,000,000',
  distribution: {
    community: {
      percentage: 70,
      amount: '700,000,000',
      description: 'Community rewards, airdrops, and ecosystem growth initiatives'
    },
    development: {
      percentage: 20,
      amount: '200,000,000',
      description: 'Platform development, marketing, and strategic partnerships'
    },
    treasury: {
      percentage: 10,
      amount: '100,000,000',
      description: 'Liquidity provision and ecosystem stability reserve'
    }
  }
} as const;