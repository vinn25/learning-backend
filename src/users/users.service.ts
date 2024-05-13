import { Body, Injectable, Param, Query } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN"
        },
        {
            "id": 3,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER"
        },
        {
            "id": 4,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER"
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN"
        }
    ]

    // Get all the users
    getAllUsers() {
        return this.users
    }
}
