// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StoreSettingsType = {
  "IS_PAID": "isPaid",
  "IS_PREMIUM": "isPremium",
  "IS_PROMOTED": "isPromoted"
};

const { Opentime, Categories, Notes, Orders, Ads, User, Store, Evaluation, Location, Contact, Sellplaces, Social, SideButton, Side, StoreSettingsValidation, StoreSettings } = initSchema(schema);

export {
  Opentime,
  Categories,
  Notes,
  Orders,
  Ads,
  User,
  Store,
  Evaluation,
  StoreSettingsType,
  Location,
  Contact,
  Sellplaces,
  Social,
  SideButton,
  Side,
  StoreSettingsValidation,
  StoreSettings
};