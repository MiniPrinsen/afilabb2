import { Mongo } from 'meteor/mongo';

export const Ads = new Mongo.Collection('tbl_ads');

export const Companies = new Mongo.Collection('tbl_companies');
