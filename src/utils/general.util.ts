export function isAnyKeyFilled(
    obj: object
) {
    return Object.values(obj).some( (val) => val.length && val.length > 0);
}