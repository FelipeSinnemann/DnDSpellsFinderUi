export class Spell {
    id: number;
    name: string;
    level: number;
    school: string;
    castingTime: string;
    range: string;
    components: string;
    duration: string;
    description: string;
    materials: string;
    showMaterials: boolean;
    showDescription: boolean;
    constructor(
        id: number,
        name: string,
        level: number,
        school: string,
        castingTime: string,
        range: string,
        components: string,
        duration: string,
        description: string,
        materials: string,
    ) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.school = school;
        this.castingTime = castingTime;
        this.range = range;
        this.components = components;
        this.duration = duration;
        this.description = description;
        this.materials = materials;
        this.showMaterials = false;
        this.showDescription = false;
    }
}
