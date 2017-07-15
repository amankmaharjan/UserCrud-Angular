import {Injectable} from "@angular/core";
import {User} from "./user";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";


@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:8080/user/'

  constructor(private http: Http) {
  }

  create(user: User): Promise<void> {
    return this.http
      .post(this.apiUrl, user, {headers: this.headers})
      .toPromise()
      .then(res => console.log(res))
      .catch(this.handleError);

  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  update(user: User): Promise<void> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http
      .put(url, user, {headers: this.headers})
      .toPromise()
      .then(res => console.log(res))
      .catch(this.handleError);
  }

  delete(id: Number): Promise<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

  }

  getUser(id: number): Promise<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}


