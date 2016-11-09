export class Projection {
  constructor(
  	public id: number,
    public movie: string,
    public theatre: string,
    public time: string,
    public isClicked: boolean = false) { }
}