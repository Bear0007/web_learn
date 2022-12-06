import bigintF from 'json-bigint'
let JSONbigNative = bigintF({useNativeBigInt:true})
// let JSONbigString = bigintF({ storeAsString : true})
let jsonStr = {
    "id":9007199254740998,
    "list": []
}
console.log(JSONbigNative.parse(jsonStr.id))
// console.log(JSONbigString.parse(jsonStr.id))