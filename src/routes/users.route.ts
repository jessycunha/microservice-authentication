import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUser();
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', async (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const user = await userRepository.findById(uuid);
    res.status(StatusCodes.OK).send(user);
});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.create(newUser);
    res.status(StatusCodes.CREATED).send(uuid);
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