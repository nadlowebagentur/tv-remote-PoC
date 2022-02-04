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

async function run() {
    await control.turnOn();

    const isAvailable = await control.isAvailable()

    console.log({isAvailable});

    if (isAvailable) {
        // Get token for API
        // const token = await control.getTokenPromise();
        // console.info('# Response getToken:', token)

        // Send key to TV
        await control.sendKeyPromise(KEYS.KEY_VOLDOWN);
        await control.sendKeyPromise(KEYS.KEY_VOLUP);
        await control.sendKeyPromise(KEYS.KEY_VOLDOWN);
        await control.sendKeyPromise(KEYS.KEY_VOLUP);
        await control.sendKeyPromise(KEYS.KEY_VOLDOWN);
        await control.sendKeyPromise(KEYS.KEY_VOLUP);
        await control.sendKeyPromise(KEYS.KEY_VOLDOWN);
        await control.sendKeyPromise(KEYS.KEY_VOLUP);
        await control.sendKeyPromise(KEYS.KEY_VOLDOWN);
        await control.sendKeyPromise(KEYS.KEY_VOLUP);

        await control.sendKeyPromise(KEYS.KEY_RIGHT);
        await control.sendKeyPromise(KEYS.KEY_RIGHT);
        await control.sendKeyPromise(KEYS.KEY_RIGHT);
        await control.sendKeyPromise(KEYS.KEY_RIGHT);

        await control.sendKeyPromise(KEYS.KEY_HOME);
        await control.sendKeyPromise(KEYS.KEY_MENU);
        await control.sendKeyPromise(KEYS.KEY_ID_SETUP);
    }
}

run().then(() => console.log('Done')).catch((err) => console.error('[Got Error]', err))
