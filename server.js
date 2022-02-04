import find from 'local-devices'

async function run() {
  const devices = await find('192.168.50.0/24');

  console.log('Done')

  console.dir(devices.length)
  console.dir(devices)
}

run().catch(console.error)
