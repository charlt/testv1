import UserService from '../src/services/user.service';
const mockingoose = require('mockingoose');
import { User } from "../src/models/user.model";
import { Iuser } from "../src/interfaces/user.interface";
jest.setTimeout(30000);
describe('User service unit tests', () => {
    describe('Register', () => {
        test('Should create user in MongoDB', async () => {
            const userInput = {
                name: 'Charly',
                appat: 'Bernabe',
                apmat: 'Bernabe',
            };
            const user = mockingoose(User);
            
            user.build = (attr: Iuser) => {
                return new User(attr)
            }

            const userService = new UserService(user);
            const newUser = await userService.createUser(userInput.name, userInput.appat, userInput.apmat)

            expect(newUser).toBeDefined();
        });
    })


    describe('Get Information', () => {
        test('Should get users from MongoDB', async () => {
            const user = mockingoose(User);
            user.find = () => {
                return {
                    "name": "charly",
                    "appat": "Bernabe",
                    "apmat": "Bernabe",
                    "_id": "6299b95affc99d1a239b2c7f"
                }
            }
            const userService = new UserService(user);
            const users = await userService.getUsers();
            expect(users).toBeDefined();
        });
    })
})