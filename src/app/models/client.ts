export class Client {
  id?: any; // not required ...
  name: string;
  age: number;
  articles?: Array<any>; // OneToMany with Article
}
