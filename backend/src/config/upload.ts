import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {

      const newName = file.originalname.replace(/[^a-zA-Z0-9.\-]\s*/g, "");
      const fileName = `${Date.now()}-${newName}`;

      cb(null, fileName);
    },
  }),
};