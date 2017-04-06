/**
 * Created by thram on 6/04/17.
 */
export const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data);

export const pipe = (...functions) => data =>
  functions.reduce((value, func) => func(value), data);
