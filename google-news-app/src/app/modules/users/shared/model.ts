import {Type, Exclude} from "class-transformer";

export class UsersResult {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    @Type(() => User)
    data?: (User)[] | null;
    @Exclude() // with exclode the property wont be included in transformations
    selectedUserId: number; // additional property added to model

  }
  export class User {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    getName(): string {
      return `${this.first_name} ${this.last_name}`;
    }
  }
