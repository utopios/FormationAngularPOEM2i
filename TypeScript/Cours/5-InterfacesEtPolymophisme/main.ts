interface IConnection{
    connector():boolean;    
}

class WifiConnector implements IConnection{
    connector(): boolean {
        console.log("WifiConnection");
        return true;
    }   
}

class BluetoothConnector implements IConnection{
    connector(): boolean {
        console.log("BluetoothConnection");
        return true;
    }   
}

class SuperWifi implements IConnection{
    connector(): boolean {
        console.log("SuperWifiConnection");;
        return true
    }
    
}

class System{
    constructor(private connector: IConnection){

    }
}

let wifi = new WifiConnector();
let bluetooth = new BluetoothConnector();
let superWifi = new SuperWifi();

let system1 = new System(wifi);
let system2 = new System(bluetooth);
let system3 = new System(superWifi);