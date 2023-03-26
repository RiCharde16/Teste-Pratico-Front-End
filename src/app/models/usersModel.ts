export type usersModel = {
    id:number,
    name:string,
    email:string,
    address: {
        street:string,
        suite:string,
        city:string,
        zipcode:string
        geo: {
           latitude:string,
           longitude:string
        }
    },
    phone:string,
    website:string,
    company: {
        name:string,
        catchPhrase:string,
        bs:string
    }
}