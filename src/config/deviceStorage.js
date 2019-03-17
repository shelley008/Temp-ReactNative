import React,{AsyncStorage} from 'react-native';



class DeviceStorage {
    save(key,value){
        return AsyncStorage.setItem(key,JSON.stringify(value))
    }
    get(key) {
        return AsyncStorage.getItem(key).then(value=>{
            const jsonValue = JSON.parse(value);
            return jsonValue;
        })
    }
    static update(key, value) {
        return DeviceStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }
    static delete(key) {
        return AsyncStorage.removeItem(key);
    }

}



export default DeviceStorage;