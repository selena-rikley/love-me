export class Character {
    lovePts: number;
    friendPts: number;
    name: string;
    id: CharacterTag;

    constructor(name: string, id: CharacterTag) {
        this.name = name;
        this.id = id;
        this.lovePts = 0;
        this.friendPts = 0;
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
