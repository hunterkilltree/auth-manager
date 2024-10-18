export interface User {
  email: string;
  password: string;
  isActive?: boolean;
}

export interface Admin extends User {
  role: "ADMIN" | "SUPER_ADMIN";
}
