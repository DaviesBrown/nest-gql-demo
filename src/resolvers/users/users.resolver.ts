import { Query, Resolver } from '@nestjs/graphql';
import data from 'src/data';
import { User } from 'src/models/user.model';

@Resolver()
export class UsersResolver {
    @Query(() => [User])
    users(): User[] {
        return data.users;
    }
}
