export class Book {
    public id: number;
    public isbn: string;
    public titre: string;
    public description: string;
    public auteur: {
      auteur_id: number,
      prenom: string,
      nom: string
    }
    public pic: string
    public archive: boolean

    constructor () {}

  }