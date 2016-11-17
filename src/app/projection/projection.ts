import { Movie } from '../movie';
import { Theatre } from '../theatre/theatre';
export class Projection {
  constructor(
  	public id: number,
    public movie: Movie,
    public theatre: Theatre,
    public time: string,
    public isClicked: boolean = false) { }
}