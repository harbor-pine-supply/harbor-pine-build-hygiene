// Opening hours for each Harbor & Pine store (made-up data).
const HOURS = { portland: "8:00-18:00", tacoma: "9:00-17:00" };
export const hoursFor = (store) => HOURS[store.toLowerCase()] ?? "closed";
