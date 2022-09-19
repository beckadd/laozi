export class OfficeItem {
    constructor(
      public meta: {
        // TODO: Figure out how to fix this so I can gen
        created_at: Date,
        last_modified_at: Date,
        last_modified_by: User;
        author: User;
      },
      public permissions: AccessManager,
      id: string = createUniqueId()
    ) {

        this.meta.created_at = new Date();
        this.meta.last_modified_at = new Date();
    }
  }


export class OfficeCollection<T> extends OfficeItem {
    constructor(
        items: T[],


    ) {
        super();
    }
}

export class AccessManager {
  
}

export class User {}

export class UserList extends OfficeCollection<User> {
    /**
     * Provides a list of users that have varying access requirements
     */
  }