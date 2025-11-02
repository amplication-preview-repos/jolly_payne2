import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WhitelistWhereInput = {
  adminUploadBatch?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  participantStatus?: StringNullableFilter;
  phone?: StringNullableFilter;
};
