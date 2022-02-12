import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ firstName: 'Jessica', lastName: 'Cunha' }];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    // bancoDeDados.getUserByUUid(uuid);
    res.status(StatusCodes.OK).send(`Você digitou: ${uuid}`);
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const editedUser = req.body;

    editedUser.uuid = uuid;

    res.status(StatusCodes.OK).send(editedUser);
});

usersRoute.delete('/users/:uuid', (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.status(StatusCodes.OK).send(uuid);
})

export default usersRoute;
// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid