// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StoreSettingsType = {
  "IS_PAID": "isPaid",
  "IS_PREMIUM": "isPremium",
  "IS_PROMOTED": "isPromoted"
};

const OpentimesType = {
  "DEFAULT": "default",
  "CUSTOM": "custom",
  "HOLIDAY": "holiday",
  "SHORT": "short"
};

const { Opentime, Categories, Notes, Orders, Ads, User, Store, Evaluation, StoreCategories, Location, Contact, Sellplaces, Social, SideButton, Side, StoreSettingsValidation, StoreSettings } = initSchema(schema);

export {
  Opentime,
  Categories,
  Notes,
  Orders,
  Ads,
  User,
  Store,
  Evaluation,
  StoreCategories,
  StoreSettingsType,
  OpentimesType,
  Location,
  Contact,
  Sellplaces,
  Social,
  SideButton,
  Side,
  StoreSettingsValidation,
  StoreSettings
};