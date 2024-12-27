export const tokenConfig = {
  name: 'StackPoints',
  symbol: 'STP',
  totalSupply: '1,000,000,000',
  distribution: {
    community: {
      percentage: 50,
      amount: '500,000,000',
      description: 'Earlydrop to existing StackExchange Community based on reputation points'
    },
    development: {
      percentage: 20,
      amount: '200,000,000',
      description: 'Content development and community engagement drop(based on content quality).'
    },
    liquidity: {
      percentage: 30,
      amount: '300,000,000',
      description: 'Initial Liquidity provision(10%), Exchange listing(10%), Market making and ecosystem stability reserve(10%)'
    }
  }
} as const;