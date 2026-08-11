import ratelimit from "../config/upstash.js";

const rateLimiter = async (req,res,next) =>{
    try{
        const identifier = req.ip || req.headers["x-forwarded-for"] || "global";
        const{success} = await ratelimit.limit("my-rate-limit");

        if(!success){
            return res.status(429).json({
                message:"TO many request Plzz try agai later",
            });
        }
        next();
    } catch (error){
        // console.log("RAte limit error",error);
        console.error("Upstash Ratelimit connection failed:", error.message);
        // next(error);
        next();
    }
};

export default rateLimiter;