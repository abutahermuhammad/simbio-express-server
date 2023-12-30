import { urlencoded } from "express";


const options = {
    extended: false,
    // inflate: boolean,
    // limit: "",
    // parameterLimit: "number",
    // type: "1mb",
    // verify: () => {},
}

export default urlencoded(options)