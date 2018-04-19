// pages/index.js
import Link from 'next/link'

// pages/index.js
import getConfig from 'next/config'
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

console.log('publicRuntimeConfig', publicRuntimeConfig) // Will be available on both server and client
// console.log(serverRuntimeConfig.mySecret) // Will only be available on the server side
// console.log(publicRuntimeConfig.staticFolder) // Will be available on both server and client


export default () =>
  <div>
    Click{' '}
    <Link href="/chart/history">
      <a>history</a>
    </Link>{' '}
    to read more
  </div>