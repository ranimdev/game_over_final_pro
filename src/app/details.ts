export interface Details {
    id:number,
    description:string,
    developer?:string,
    freetogame_profile_url:string,
    genre?:string,
    platform?:string,
    publisher?:string,
    release_date?:string,
    thumbnail:string,
    title?:string,
    minimum_system_requirements:{
        graphics?:string,
        memory?:string,
        os?:string,
        processor?:string,
        storage?:string,
    }


}
