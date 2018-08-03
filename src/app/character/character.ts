class Character {
    lovePts: number;
    friendPts: number;
    name: string;
    id: characterTag;

    constructor(name: string, id: characterTag) {
        this.name = name;
        this.id = id;
        this.lovePts = 0;
        this.friendPts = 0;
    };

};

enum characterTag {
    Freddie = 'Freddie',
    Darian = 'Darian',
    Donalee = 'Donalee',
    Renata = 'Ren',
    Charlie = 'Charlie',
    Robot = 'Robot',
    Player = 'You'
}

