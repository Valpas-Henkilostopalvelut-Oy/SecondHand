// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StoreSettingsType = {
  "IS_PAID": "isPaid",
  "IS_PREMIUM": "isPremium",
  "IS_PROMOTED": "isPromoted"
};

const { Categories, Notes, Orders, Ads, User, Store, Evaluation, Location, Contact, Opentime, Priceitem, Sellplaces, Social, SideButton, Side, StoreSettingsValidation, StoreSettings } = initSchema(schema);

export {
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
  Opentime,
  Priceitem,
  Sellplaces,
  Social,
  SideButton,
  Side,
  StoreSettingsValidation,
  StoreSettings
};