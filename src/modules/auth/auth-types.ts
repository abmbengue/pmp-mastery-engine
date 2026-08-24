export interface AuthUser {
  id: string;
  email: string;
  name: string;
  locale: "fr" | "en";
}

export interface AuthSession {
  user: AuthUser;
  expires: string;
}
