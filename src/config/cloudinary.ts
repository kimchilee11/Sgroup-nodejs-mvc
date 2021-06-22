import dotenv from 'dotenv';
import cloudinary from 'cloudinary';

dotenv.config();
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME || "dz6cxtulr",
    api_key: process.env.CLOUDINARY_API_KEY || "624673635566928",
    api_secret: process.env.CLOUDINARY_API_SECRECT || "cpu6qYyC9cEd4a55txgPzZhdibI",
});
console.log("cloud_name"+process.env.CLOUDINARY_NAME);
console.log("huhuhuuu");
