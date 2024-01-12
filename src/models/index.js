// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Types, Locations, Cities, Notes, Customers, Businesses, Categories, BusinessesCategories, Social, Contacts, SpecialDay, Date, TimeOfDay, Periods, OpenHours } = initSchema(schema);

export {
  Types,
  Locations,
  Cities,
  Notes,
  Customers,
  Businesses,
  Categories,
  BusinessesCategories,
  Social,
  Contacts,
  SpecialDay,
  Date,
  TimeOfDay,
  Periods,
  OpenHours
};