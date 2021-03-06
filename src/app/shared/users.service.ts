import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { User } from './user.model';


@Injectable()

export class UsersService {
    user: User = new User('', 0, '');

    constructor(private router: Router, private http: Http) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            this.user.username = currentUser.username;
            this.user.token = currentUser.token;
            this.user.role = currentUser.role;
        }

    }

    loginUser(username: string, password: string) {
        const lUser = Observable.create((observer: Observer<string>) => {
            this.http.post('http://localhost:8080/api/authenticate', { username: username, password: password })
                .map((res: Response) => {
                    return res.json();
                })
                .subscribe(
                (resp) => {
                    console.log(resp);
                    if (resp) {
                        // saving response data and creating a user
                        this.user.username = username;
                        this.user.role = resp.role;
                        this.user.token = resp.token;
                        // creating a local Storage
                        localStorage.setItem('currentUser', JSON.stringify({
                            username: this.user.username,
                            token: this.user.token,
                            role: this.user.role
                        }));
                        observer.next(resp.success);
                        // see that later with angular universal
                        // redirecting
                        if (resp.role === 2) {
                            this.router.navigate(['/user']);
                        } else if (resp.role === 4) {
                            this.router.navigate(['/admin']);
                        }
                    }
                },
                (error) => {
                    observer.error(error);
                });
        });
        return lUser;
    }
    logoutUser(): void {
        // clear token remove user from local storage to log user out
        this.user = new User('', 0, '');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/home']);
    }
}
