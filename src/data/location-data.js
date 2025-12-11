const locations = [
  // ঢাকা বিভাগ (Dhaka Division)
  { latitude: 23.777176, longitude: 90.399452, location: "Dhaka" },
  { latitude: 23.8129, longitude: 90.1504, location: "Faridpur" },
  { latitude: 23.0039, longitude: 89.8407, location: "Gopalganj" },
  { latitude: 24.3121, longitude: 90.2642, location: "Gazipur" },
  { latitude: 24.6368, longitude: 90.49, location: "Kishoreganj" },
  { latitude: 23.63, longitude: 90.79, location: "Madaripur" },
  { latitude: 24.004, longitude: 90.1, location: "Manikganj" },
  { latitude: 23.7441, longitude: 90.8718, location: "Munshiganj" },
  { latitude: 24.2323, longitude: 90.3159, location: "Narayanganj" },
  { latitude: 23.1678, longitude: 90.4276, location: "Narsingdi" },
  { latitude: 23.4735, longitude: 90.6698, location: "Rajbari" },
  { latitude: 23.2081, longitude: 90.3541, location: "Shariatpur" },
  { latitude: 24.4371, longitude: 89.9868, location: "Tangail" },

  // চট্টগ্রাম বিভাগ (Chattogram Division)
  { latitude: 22.3569, longitude: 91.7832, location: "Chattogram" },
  { latitude: 21.4271, longitude: 92.0058, location: "Cox's Bazar" },
  { latitude: 23.4474, longitude: 91.2405, location: "Cumilla" },
  { latitude: 23.36, longitude: 90.77, location: "Chandpur" },
  { latitude: 23.0366, longitude: 90.9935, location: "Lakshmipur" },
  { latitude: 23.1118, longitude: 91.1394, location: "Feni" },
  { latitude: 22.9167, longitude: 91.3991, location: "Noakhali" },
  { latitude: 21.75, longitude: 92.2, location: "Bandarban" },
  { latitude: 23.2384, longitude: 91.0772, location: "Brahmanbaria" },
  { latitude: 22.65, longitude: 92.23, location: "Khagrachhari" },
  { latitude: 22.6534, longitude: 92.1798, location: "Rangamati" },

  // খুলনা বিভাগ (Khulna Division)
  { latitude: 22.8456, longitude: 89.5403, location: "Khulna" },
  { latitude: 22.7562, longitude: 89.1722, location: "Bagerhat" },
  { latitude: 22.5, longitude: 89.18, location: "Jashore" },
  { latitude: 23.2198, longitude: 89.26, location: "Jhenaidah" },
  { latitude: 23.7801, longitude: 88.8953, location: "Chuadanga" },
  { latitude: 22.9575, longitude: 88.9419, location: "Kushtia" },
  { latitude: 23.6369, longitude: 88.8252, location: "Meherpur" },
  { latitude: 22.8251, longitude: 89.7602, location: "Magura" },
  { latitude: 23.0566, longitude: 89.702, location: "Narail" },
  { latitude: 22.25, longitude: 89.09, location: "Satkhira" },

  // রাজশাহী বিভাগ (Rajshahi Division)
  { latitude: 24.3636, longitude: 88.601, location: "Rajshahi" },
  { latitude: 24.8471, longitude: 89.3794, location: "Pabna" },
  { latitude: 24.4754, longitude: 88.2917, location: "Chapainawabganj" },
  { latitude: 24.6946, longitude: 89.2676, location: "Sirajganj" },
  { latitude: 24.7891, longitude: 88.9248, location: "Naogaon" },
  { latitude: 24.4079, longitude: 89.2483, location: "Natore" },
  { latitude: 25.1, longitude: 89.1, location: "Joypurhat" },
  { latitude: 24.908, longitude: 89.1054, location: "Bogra" },

  // বরিশাল বিভাগ (Barishal Division)
  { latitude: 22.701, longitude: 90.3535, location: "Barishal" },
  { latitude: 22.75, longitude: 90.41, location: "Pirojpur" },
  { latitude: 22.3789, longitude: 90.0381, location: "Barguna" },
  { latitude: 22.1819, longitude: 90.3168, location: "Bhola" },
  { latitude: 22.427, longitude: 90.662, location: "Jhalokati" },
  { latitude: 22.3, longitude: 90.83, location: "Patuakhali" },

  // সিলেট বিভাগ (Sylhet Division)
  { latitude: 24.8949, longitude: 91.8687, location: "Sylhet" },
  { latitude: 24.0848, longitude: 91.5647, location: "Moulvibazar" },
  { latitude: 24.38, longitude: 91.5, location: "Sunamganj" },
  { latitude: 24.5772, longitude: 91.2291, location: "Habiganj" },

  // রংপুর বিভাগ (Rangpur Division)
  { latitude: 25.7439, longitude: 89.2752, location: "Rangpur" },
  { latitude: 25.6881, longitude: 88.892, location: "Dinajpur" },
  { latitude: 25.9686, longitude: 89.6384, location: "Kurigram" },
  { latitude: 26.0, longitude: 89.15, location: "Gaibandha" },
  { latitude: 26.248, longitude: 88.46, location: "Thakurgaon" },
  { latitude: 26.3314, longitude: 88.5833, location: "Panchagarh" },
  { latitude: 25.618, longitude: 89.04, location: "Nilphamari" },
  { latitude: 25.9333, longitude: 89.9667, location: "Lalmonirhat" },

  // ময়মনসিংহ বিভাগ (Mymensingh Division)
  { latitude: 24.7471, longitude: 90.4203, location: "Mymensingh" },
  { latitude: 24.9601, longitude: 90.7932, location: "Netrokona" },
  { latitude: 25.1, longitude: 90.0, location: "Sherpur" },
  { latitude: 24.59, longitude: 90.13, location: "Jamalpur" },
];

function getLocations() {
  return locations;
}
function getLocationByName(name) {
  const defaultLocation = {
    latitude: 0,
    longitude: 0,
    location: "",
  };
  if (!name) return defaultLocation;
  const filteredLocation = locations.filter((item) => item.location === name);
  if (filteredLocation.length > 0) {
    return filteredLocation[0];
  } else {
    return defaultLocation;
  }
}
export { getLocationByName, getLocations };
