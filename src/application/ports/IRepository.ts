import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class IRepository<Entity> {
    abstract createDoctor(entity: Entity);
    abstract checkDoctor(entity: Entity);
    
    
    
       
}