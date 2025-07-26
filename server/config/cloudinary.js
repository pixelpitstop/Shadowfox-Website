import {v2 as cloudinary} from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_APIKEY,
    api_secret:process.env.CLOUDINARY_APISECRET
});

const storage=new CloudinaryStorage({
    cloudinary, 
    params:{
        folder:'Shadowfox Certificates',
        allowed_formats:['jpg','png','pdf']
    },
});
export{cloudinary,storage};