export default class Role{

    Role(name, accessOnResources){
        this.name = name;
        this.accessOnResources = accessOnResources
    }


    addAccessOnResource(access, resource){

        //TODO: check if access already exist on resource

        let isResourceExist = false;
        for (let i = 0; i < accessOnResources.length; i++) {
            const element = accessOnResources[i];

            if(element.resource.name = resource.name){
                element.accesses.push(access);
                isResourceExist = true;
                break;
            }
            
        }


        if(!isResourceExist){
            this.accessOnResources.push({
                accesses: [access],
                resource: resource
            });
        }

    }
}