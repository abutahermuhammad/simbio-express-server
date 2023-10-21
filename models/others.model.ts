import { z } from "zod";

export const LANGUAGES = z.enum(["ENGLISH", "BENGALI"]);

export const GENDER = z.enum(["FEMALE", "MALE", "TRANS"]);

export const FACILITY_TYPE = z.enum(["HOSPITAL", "CLINIC", "OTHER"]);

export const BLOOD_GROUP = z.enum(["A_POS", "A_NEG", "B_POS", "B_NEG", "AB_POS", "AB_NEG", "O_POS", "O_NEG"]);

export const ACCOUNT_STATUS = z.enum(["PENDING", "ACTIVE", "SUSPENDED", "BANNED"]);

export const AUTHENTICATION_METHOD = z.enum(["PASSWORD", "TWO_FACTOR_AUTH", "FACEBOOK", "TWITTER"]);

export const THEME = z.enum(["LIGHT", "DARK"]);

export const TIME_FORMAT = z.enum(["H12AM", "H12PM", "H24", "H24S", "H12NoS", "H24NoS", "H12S_AM", "H12S_PM", "H24S_AM", "H24S_PM"]);

export const DATE_FORMAT = z.enum(["YMD_HYPHEN", "DMY_HYPHEN", "MDY_SLASH", "DMY_SLASH", "MON_DY_COMMA", "DY_MON_COMMA", "MONTH_DY_COMMA", "DY_MONTH_COMMA", "MON_DY_SPACE", "DY_MON_SPACE"]);

export const TIMEZONE = z.enum([
    "GMT_10_Hawaii",
    "GMT_09_Alaska",
    "GMT_08_Pacific_Time_US_Canada",
    "GMT_07_Mountain_Time_US_Canada",
    "GMT_06_Central_Time_US_Canada_Mexico_City",
    "GMT_05_Eastern_Time_US_Canada_Bogota_Lima",
    "GMT_04_Atlantic_Time_Canada_Caracas_La_Paz",
    "GMT_03_30_Newfoundland",
    "GMT_03_Buenos_Aires_Brasilia_Georgetown",
    "GMT_02_Mid_Atlantic",
    "GMT_01_Azores_Cape_Verde_Islands",
    "GMT_00_Western_Europe_Time_London_Lisbon_Casablanca",
    "GMT_01_Brussels_Copenhagen_Madrid_Paris",
    "GMT_02_Athens_Bucharest_Istanbul",
    "GMT_03_Moscow_St_Petersburg_Kuwait_Nairobi",
    "GMT_03_30_Tehran",
    "GMT_04_Abu_Dhabi_Muscat_Baku_Tbilisi",
    "GMT_04_30_Kabul",
    "GMT_05_Ekaterinburg_Islamabad_Karachi_Tashkent",
    "GMT_05_30_Chennai_Kolkata_Mumbai_New_Delhi",
    "GMT_05_45_Kathmandu",
    "GMT_06_Astana_Dhaka_Almaty_Urumqi",
    "GMT_06_30_Yangon_Cocos_Islands",
    "GMT_07_Bangkok_Hanoi_Jakarta",
    "GMT_08_Beijing_Perth_Singapore_Hong_Kong",
    "GMT_09_Tokyo_Seoul_Osaka_Sapporo_Yakutsk",
    "GMT_09_30_Adelaide_Darwin",
    "GMT_10_Eastern_Australia_Guam_Vladivostok",
    "GMT_11_Magadan_Solomon_Islands_New_Caledonia",
    "GMT_12_Auckland_Wellington_Fiji_Kamchatka",
    "GMT_13_Nuku_alofa",
]);

export const ORGANIZATION_TYPE = z.enum(["HOSPITAL", "CLUB", "CENTER"]);
