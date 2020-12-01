import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'subapp',
    entry: 'http://localhost:10011/test/',
    container: '#subapp-container',
    activeRule: '/'  
  }
])
start({
  singular: false
})
