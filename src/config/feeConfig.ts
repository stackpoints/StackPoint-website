export const feeConfig = {
 rewardWithdrawalFees: 5,
  distribution: {
    community: 2, // 40% of fees go to community rewards pool
    development: 2, // 30% of fees go to development fund
    burn: 1, // 30% of fees are burned
  }
} as const;