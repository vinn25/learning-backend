import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { UserRole } from "../enum/roles.enum";
import { Roles } from "../decorators/roles.decorator";

@Injectable()
export class RolesFavouritesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles = this.reflector.get(Roles, context.getHandler());

        if (!requiredRoles) {
            return false;
        } else {
            console.log(requiredRoles);
            return true;
        }

        console.log('Roles guard successful')

        // const request = context.switchToHttp().getRequest();
    }
}