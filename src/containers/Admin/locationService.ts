
type City = {
  city: string;
  country: string;
  admin_name: string;
};

type GroupedCities = {
  adminName: string;
  country: string;
  cities: string[];
};

export const groupAndSortCities = (cities: City[]): GroupedCities[] => {
  const grouped: { [key: string]: GroupedCities } = {};

  cities.forEach((city) => {
    if (!grouped[city.admin_name]) {
      grouped[city.admin_name] = {
        adminName: city.admin_name,
        country: city.country,
        cities: [],
      };
    }
    grouped[city.admin_name].cities.push(city.city);
  });

  const result = Object.values(grouped);

  // Сортируем города в каждой группе
  result.forEach((group) => group.cities.sort());

  // Сортируем по административному названию
  return result.sort((a, b) => a.adminName.localeCompare(b.adminName));
};
