import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params;

        const all = this.showUserProfileUseCase.execute({ user_id });

        return response.status(201).json(all);
    }
}

export { ShowUserProfileController };
