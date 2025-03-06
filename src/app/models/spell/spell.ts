export class Spell {
    id: number;
    school_id: number;
    name: string;
    level: number;
    description: string;
    special_description: boolean;
    range: string;
    casting_time: string;
    duration: string;
    concentration: boolean;
    ritual: boolean;
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    material_components: string;
    showMaterials: boolean;
    showDescription: boolean;
    constructor(
        id: number,
        school_id: number,
        name: string,
        level: number,
        description: string,
        special_description: boolean,
        range: string,
        casting_time: string,
        duration: string,
        concentration: boolean,
        ritual: boolean,
        verbal: boolean,
        somatic: boolean,
        material: boolean,
        material_components: string,
    ) {
        this.id = id;
        this.school_id = school_id;
        this.name = name;
        this.level = level;
        this.description = description;
        this.special_description = special_description;
        this.range = range;
        this.casting_time = casting_time;
        this.duration = duration;
        this.concentration = concentration;
        this.ritual = ritual;
        this.verbal = verbal;
        this.somatic = somatic;
        this.material = material;
        this.material_components = material_components;
        this.showMaterials = false;
        this.showDescription = false;
    }
}
