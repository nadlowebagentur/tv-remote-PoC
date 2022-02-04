import {Samsung, KEYS, APPS} from 'samsung-tv-control'

const config = {
    // debug: true, // Default: false
    ip: '192.168.0.53',
    mac: '64:E7:D8:AE:78:45',
    nameApp: 'NodeJS-Test', // Default: NodeJS
    port: 8001, // Default: 8002
    // token: '12345678',
}

const control = new Samsung(config)

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000))
}

function sendKey(key) {
    return new Promise(resolve => {
        console.log('[sendKey]', key);
        control.sendKey(key, function (err, res) {
            console.dir({ err, res });

            sleep().then(resolve);
        })
    })
}

async function run() {
    await control.turnOn();

    const isAvailable = await control.isAvailable()

    console.log({isAvailable});

    if (isAvailable) {
        // Get token for API
        // const token = await control.getTokenPromise();
        // console.info('# Response getToken:', token)

        // Send key to TV
        await sendKey(KEYS.KEY_VOLDOWN);
        await sendKey(KEYS.KEY_VOLUP);
        await sendKey(KEYS.KEY_VOLDOWN);
        await sendKey(KEYS.KEY_VOLUP);
        await sendKey(KEYS.KEY_VOLDOWN);
        await sendKey(KEYS.KEY_VOLUP);
        await sendKey(KEYS.KEY_VOLDOWN);
        await sendKey(KEYS.KEY_VOLUP);
        await sendKey(KEYS.KEY_VOLDOWN);
        await sendKey(KEYS.KEY_VOLUP);

        await sendKey(KEYS.KEY_RIGHT);
        await sendKey(KEYS.KEY_RIGHT);
        await sendKey(KEYS.KEY_RIGHT);
        await sendKey(KEYS.KEY_RIGHT);

        await sendKey(KEYS.KEY_HOME);
        await sendKey(KEYS.KEY_MENU);
        await sendKey(KEYS.KEY_ID_SETUP);
    }
}

run().then(() => console.log('Done')).catch((err) => console.error('[Got Error]', err))
