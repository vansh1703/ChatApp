import jwt from "jsonwebtoken"

const createTokenAndSaveCookie = (userId,res)=>{
    const token = jwt.sign({userId}, process.env.JWT_TOKEN , {
        expiresIn: "10d"
    });
    res.cookie("jwt" , token , {
        httpOnly : true, //xxs attack se bachaega
        secure : true,
        sameSite : "strict" //csrf protection
    });
}
export default createTokenAndSaveCookie;