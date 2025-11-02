import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FileWhereInput = {
  altText?: StringNullableFilter;
  filename?: StringNullableFilter;
  height?: IntNullableFilter;
  id?: StringFilter;
  mimetype?: StringNullableFilter;
  publicId?: StringNullableFilter;
  resourceType?: StringNullableFilter;
  size?: IntNullableFilter;
  uploader?: StringNullableFilter;
  url?: StringNullableFilter;
  width?: IntNullableFilter;
};
