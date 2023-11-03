import { GLP_MANAGER } from './abis/glpManager.ts'
import { Manifest } from './deps.ts'
import { glpChanges } from './entities.ts'
import { AddLiquidityHandler } from './handlers/addLiquidity.ts'
import { RemoveLiquidityHandler } from './handlers/removeLiquidity.ts'

const manifest = new Manifest('GLPLiquidityChanges')

manifest
  .addEntity(glpChanges)
  .addChain('arbitrum', (chain) =>
    chain
      .addContract({
        name : 'GLPManager',
        abi : GLP_MANAGER,
        sources : { '0x3963FfC9dff443c2A94f21b129D429891E32ec18' : 40559781n },
        eventHandlers : {
          'AddLiquidity' : AddLiquidityHandler,
          'RemoveLiquidity' : RemoveLiquidityHandler,
        },
      })
      )
      .addChain('avalanche', (chain) =>
      chain
        .addContract({
          name : 'GLPManager',
          abi : GLP_MANAGER,
          sources : { '0xD152c7F25db7F4B95b7658323c5F33d176818EE4' : 22742389n },
          eventHandlers : {
            'AddLiquidity' : AddLiquidityHandler,
            'RemoveLiquidity' : RemoveLiquidityHandler,
          },
        })
        )
export default manifest.build()
