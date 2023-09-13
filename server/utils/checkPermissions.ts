import { UnAuthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser: any, resourceUserId: string) => {
    if(requestUser?.userId === resourceUserId.toString()) {
        return
    }
    throw new UnAuthenticatedError('Not authorized to access this resource')
}

export default checkPermissions