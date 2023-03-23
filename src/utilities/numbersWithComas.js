export const numberWithCommas = (x) => {
    if (x !== undefined) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return x
};