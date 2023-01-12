export default class Resource{

    Resource(name){
        this.name = name
        this.accesses = accesses
    }

    addAccess(access){
        this.accesses.push(access);
    }
}