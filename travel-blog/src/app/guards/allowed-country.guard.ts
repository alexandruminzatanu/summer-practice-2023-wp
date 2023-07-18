import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const bannedCountries = ['Germany', 'France'];

export const allowedCountryGuard: CanActivateFn = (route, state) => {
  const country = String(route.paramMap.get('title'));
  if (bannedCountries.includes(country)) {
    // alert("You don't have permision to access this page"); // daca vreti sa afisati doar un mesaj de alerta pt utilizator fara redirectionare
    const router = inject(Router);
    router.navigate(['']);
    return false;
  }
  return true;
};
