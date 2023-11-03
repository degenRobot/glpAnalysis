import { GLP_MANAGER } from '../abis/glpManager.ts';
import { REWARD_ROUTER } from '../abis/rewardRouter.ts'
import { EventHandlerFor, formatUnits } from '../deps.ts'
import { glpChanges } from '../entities.ts';

export const RemoveLiquidityHandler: EventHandlerFor<typeof GLP_MANAGER, 'RemoveLiquidity'> =
  async (
    { event, client, store, contract, logger },
  ) => {
    const args = event.args

    const block = await store.retrieve(
      `getBlock: ${event.blockNumber}`,
      async () => await client.getBlock({ blockNumber: event.blockNumber }),
    );
    const chain = await client.chain?.name

    await glpChanges.create({
      account : args.account,
      amount : Number(args.glpAmount) / Number(1e18),
      type : "Redeem",
      chain : chain,
      timestamp : Number(block.timestamp),
    })

  }