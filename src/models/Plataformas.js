import mongoose from "mongoose";

const plataformaSchema = new mongoose.Schema(
    {
        id: {type: String},
        Aluno: {type: String, require: true},
        ra: {type: String, require: true},
        idade: {type: Number}
    }   
)

const plataformas = mongoose.model('plataformas', plataformaSchema);

export default plataformas