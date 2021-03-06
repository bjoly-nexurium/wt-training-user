import { User } from './user';
import { UserStore } from './user-store';

describe('UserStore', () => {

    it('should add users', () => {

        const userStore = new UserStore();

        const user1 = new User('Foo', 'BAR');
        const user2 = new User('John', 'DOE');
        const user3 = new User('Foo', 'BAR');

        const userListEmpty = userStore.getUserList();

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        const userList = userStore.getUserList();

        expect(userListEmpty).toEqual([]);

        expect(userList).toEqual([
            user1,
            user2,
            user3
        ]);

    });

    it('should remove users', () => {

        const userStore = new UserStore();

        const user1 = new User('Foo', 'BAR');
        const user2 = new User('John', 'DOE');
        const user3 = new User('Foo', 'BAR');

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        userStore.removeUser(user3);

        const userList = userStore.getUserList();

        expect(userList).toEqual([
            user1,
            user2
        ]);


    });

});