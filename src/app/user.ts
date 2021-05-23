export class User {
    constructor(
        public avatar_url:string,
        public login:string,
        public company: string, 
        public location: string,
        public name: string,
        public followers: number,
        public following: number,
        public created_at: Date,
        public public_repos: number,
        public html_url: string,
        public email:string) 
        {}
    }
