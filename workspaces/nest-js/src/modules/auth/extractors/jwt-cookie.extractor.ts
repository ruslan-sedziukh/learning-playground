import { Request } from 'express';

interface RequestWithCookies extends Request {
  cookies: {
    accessToken?: string;
  };
}

export const jwtFromCookie = (req: RequestWithCookies): string | null => {
  if (!req || !req.cookies) {
    return null;
  }

  return req.cookies['accessToken'] ?? null;
};
