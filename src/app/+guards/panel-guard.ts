import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../+services/users-service';

export const panelGuard: CanActivateFn = (route, state) => {
  const usersService = inject(UsersService);
  usersService.sessionSignIn();
  if (usersService.currentUser)
    return true;
  const router=inject(Router);
  router.navigateByUrl('/login');
  return false;
};
