import { CanActivateFn } from '@angular/router';

const bannedCountries = ['Germany', 'France'];

export const allowedCountryGuard: CanActivateFn = (route, state) => {
  const country = String(route.paramMap.get('title'));
  if (bannedCountries.includes(country)) {
    alert("You don't have permision to access this page");
    return false;
  }
  return true;
};
