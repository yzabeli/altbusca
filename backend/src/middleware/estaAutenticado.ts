import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
}

export function estaAutenticado(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const autToken = req.headers.authorization
    if (!autToken) {
        return res.json({ dados: 'Token Inválido' })
    }

    const [, token] = autToken.split(' ')
    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRETO || "140864078aeca1c7c35b4beb33c53c34"
        ) as Payload
        req.usuarioId = sub
        return next()
    } catch (err) {
        return res.json({ dados: 'Token Inválido' })
    }
}