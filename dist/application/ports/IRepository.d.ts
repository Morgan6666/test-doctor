export declare abstract class IRepository<Entity> {
    abstract createDoctor(entity: Entity): any;
    abstract checkDoctor(entity: Entity): any;
}
