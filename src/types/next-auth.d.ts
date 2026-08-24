import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      locale: "fr" | "en";
    };
  }

  interface User {
    locale?: "fr" | "en";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    locale?: "fr" | "en";
  }
}
