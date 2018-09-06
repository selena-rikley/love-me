export class Character {
    lovePts: number;
    friendPts: number;
    name: string;
    id: CharacterTag;
    gender: pronouns;

    constructor(name: string, id: CharacterTag, gender: pronouns) {
        this.name = name;
        this.id = id;
        this.lovePts = 0;
        this.friendPts = 0;
        this.gender = gender;
    };
};

export enum CharacterTag {
    Freddie = 'Freddie',
    Darian = 'Darian',
    Donalee = 'Donalee',
    Renata = 'Ren',
    Charlie = 'Charlie',
    Robot = 'Robot',
    Player = 'You'
}

export enum pronouns {
    male = 'macs',
    female = 'fem',
    neutral = 'neu'
}
