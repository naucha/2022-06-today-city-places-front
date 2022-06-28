const park = {
  features: [
    {
      type: "Feature",
      properties: {
        PARK_ID: 1,
        NAME: "Tibidabo Park",
        DESCRIPTIO: "Park del TIbidabo Barcelona",
      },
      geometry: {
        type: "Point",
        coordinates: [41.4223722, 2.1192598],
      },
    },
    {
      type: "Feature",
      properties: {
        PARK_ID: 2,
        NAME: "Ciutadella Park",
        DESCRIPTIO: "Park de la Ciutadella Barcelona",
      },
      geometry: {
        type: "Point",
        coordinates: [41.38646944, 2.18919722],
      },
    },
    {
      type: "Feature",
      properties: {
        PARK_ID: 3,
        NAME: "Castell de Montjuïc",
        DESCRIPTIO: "Castell de Montjuïc Barcelona",
      },
      geometry: {
        type: "Point",
        coordinates: [41.3633691, 2.16572975349827],
      },
    },
  ],
};

export default park;
