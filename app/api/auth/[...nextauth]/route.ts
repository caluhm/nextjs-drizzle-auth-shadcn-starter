import NextAuth, { AuthOptions } from "next-auth";
import Email from "next-auth/providers/email";
import { db } from "@/drizzle/index";
import { PlanetScaleAdapter } from "@/lib/auth/planetScaleAdapter";

export const authOptions = {
  adapter: PlanetScaleAdapter(db),
  providers: [
    Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.SECRET,
} as AuthOptions;

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
