export class User {
    public username: string;
    public role: number;
    public token: string;

    constructor(username: string, role: number, token: string) {
        this.username = username;
        this.role = role;
        this.token = token;
    }
}
