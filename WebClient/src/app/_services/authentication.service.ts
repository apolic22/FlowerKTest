import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
// tslint:disable-next-line:max-line-length
// apiUrl: 'http://localhost:5555'   => return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
    login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:5555/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
