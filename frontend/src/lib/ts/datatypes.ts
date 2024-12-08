
export interface Recipe {
  name: string;
  author: string;
  rating: number;
  description: string;
}

export interface User {
  name: string;
  email: string;
  telephone: string;
}

export interface UserDB extends User {
  passwordHash: string;
  salt: string;
}
