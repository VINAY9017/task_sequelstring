const jwt=require("jsonwebtoken")

exports.verify=async(request,response,next)=>{
    const token=request.body.token ||request.query.token ||request.headers["authorization"]
    if(!token){
        return response.status(401).json({
            status:"failed",
            nessage:"token required"
        })
    }
    try{
        const bearer=token.split(" ");
        const bearerToken=bearer[1]
        const decodeToken=jwt.verify(bearerToken,process.env.SECREYKEY)
        request.user=decodeToken

    }
    catch{
        return response.status(401).json({
            status:"failed",
            message:"token was expired"
        })
    }
    if(request.user.role==="admin"){
        return next()
    }
    else{
        return response.status(401).json({
            status:"failed",
            message:"you are not admin"
        })
    }
}