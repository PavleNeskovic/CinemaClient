export class Movie {
  constructor(
  	public id: number,
    public title: string,
    public decription: string,
    public imageUrl: string,
    public isClicked: boolean = false) { }
}