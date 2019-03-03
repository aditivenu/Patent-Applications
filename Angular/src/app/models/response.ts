import { Patents } from './patents';
export class Response {
	numFound: number;
	start: number;
	docs: Array<Patents>;
}
