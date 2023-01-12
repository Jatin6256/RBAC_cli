import globalStorage from "./globalStorage.js";
import Access from "./models/access.js";
import Resource from "./models/resource.js";
import Role from "./models/role.js";

export function addAccess(type) {
    
    let newAccess = new Access(type);
    globalStorage.accesses.push(newAccess);
    console.log("added access");

}

export function addNewResource(resourceName) {
    
    let newResource = new Resource(resourceName, []);
    globalStorage.resources.push(newResource);
    console.log("added  resource");

}

export function addAccessOnResource(accessType, resourceName) {
    let isAccessTypeExist = false;
    globalSorage.accesses.forEach(access => {
        
        if(access.type == accessType){
            isAccessTypeExist = true;
        }
    });

    if(!isAccessTypeExist){
        console.log("Access type doesn't Exist");
        return;
    }

    if(!isResourceExit){
        console.log("Resource Not Found");
    }
    
    let isResourceExit = false;
    globalSorage.resources.forEach(resource => {
        
        if(resource.name == resourceName){
            resource.addAccess(accessType);
            isResourceExist = true;
        }
    });

    if(!isResourceExit){
        console.log("Resource Not Found");
    }
}


export function createRole(name) {
    let newRole = new Role(name,[]);
    globalStorage.roles.push(newRole);
}

export function addAccessOnResourceToRole(accessType, resourceName, roleName) {
    
    // TODO: check the presence of access, resource and role like in addResource function

    let accessFound = null;
    let resourceFound = null;

    for (let i = 0; i < globalSorage.accesses.length; i++) {
        const access = globalSorage.accesses[i];

        if(access.type == accessType){
            accessFound = access;
            break;
        }
        
    }

    for (let i = 0; i < globalSorage.resources.length; i++) {
        const resource = globalSorage.resources[i];

        if(resource.name = resourceName){
            resourceFound = resource;
            break;
        }
    }

    if(!accessFound || !resourceFound){
        console.log("Access or resource not found");
        return;
    }

    for (let i = 0; i < globalSorage.roles.length; i++) {
        const role = globalSorage.roles[i];

        if(role.name == roleName){
            role.addAccessOnResource(accessFound, resourceFoun);
        }
        
    }
    
}

// export default services = {
//     addAccess,
//     addNewResource,
//     addAccessOnResource,
//     createRole,
//     addAccessOnResourceToRole
// }