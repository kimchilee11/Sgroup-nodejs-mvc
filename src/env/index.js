import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 'kcl';
export const COOKIE_SECRET = process.env.COOKIE_SECRET || 'kcl';
