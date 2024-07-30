import { Field, ObjectType } from "@nestjs/graphql";
import { Todo } from "./todo.model";

@ObjectType()
export class User {
  @Field((type) => String)
  id: string;
  
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  birthday: string;

  @Field((type) => String)
  email: string;

  @Field((type) => [Todo])
  todos: Todo[];
}
