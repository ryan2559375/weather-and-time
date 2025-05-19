export interface Weather {
  "@context": [
    "https://geojson.org/geojson-ld/geojson-context.jsonld",
    {
      "@version": "1.1";
      wx: "https://api.weather.gov/ontology#";
      s: "https://schema.org/";
      geo: "http://www.opengis.net/ont/geosparql#";
      unit: "http://codes.wmo.int/common/unit/";
      "@vocab": "https://api.weather.gov/ontology#";
      geometry: {
        "@id": "s:GeoCoordinates";
        "@type": "geo:wktLiteral";
      };
      city: "s:addressLocality";
      state: "s:addressRegion";
      distance: {
        "@id": "s:Distance";
        "@type": "s:QuantitativeValue";
      };
      bearing: {
        "@type": "s:QuantitativeValue";
      };
      value: {
        "@id": "s:value";
      };
      unitCode: {
        "@id": "s:unitCode";
        "@type": "@id";
      };
      forecastOffice: {
        "@type": "@id";
      };
      forecastGridData: {
        "@type": "@id";
      };
      publicZone: {
        "@type": "@id";
      };
      county: {
        "@type": "@id";
      };
    },
  ];
  id: string;
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: {
    "@id": string;
    "@type": string;
    elevation: {
      unitCode: string;
      value: number;
    };
    station: string;
    timestamp: string;
    rawMessage: string;
    textDescription: string;
    icon: string;
    presentWeather: [];
    temperature: {
      unitCode: string;
      value: number;
      qualityControl: string;
    };
    dewpoint: {
      unitCode: string;
      value: number;
      qualityControl: string;
    };
    windDirection: {
      unitCode: string;
      value: null;
      qualityControl: string;
    };
    windSpeed: {
      unitCode: string;
      value: null;
      qualityControl: string;
    };
    windGust: {
      unitCode: string;
      value: null;
      qualityControl: string;
    };
    barometricPressure: {
      unitCode: string;
      value: number;
      qualityControl: string;
    };
    seaLevelPressure: {
      unitCode: string;
      value: number;
      qualityControl: string;
    };
    visibility: {
      unitCode: string;
      value: number;
      qualityControl: string;
    };
    maxTemperatureLast24Hours: {
      unitCode: string;
      value: null;
    };
    minTemperatureLast24Hours: {
      unitCode: string;
      value: null;
    };
    precipitationLastHour: {
      unitCode: string;
      value: null;
      qualityControl: string;
    };
    precipitationLast3Hours: {
      unitCode: string;
      value: null;
      qualityControl: string;
    };
    precipitationLast6Hours: {
      unitCode: string;
      value: null;
      qualityControl: string;
    };
    relativeHumidity: {
      unitCode: string;
      value: number;
      qualityControl: string;
    };
    windChill: {
      unitCode: string;
      value: null;
      qualityControl: string;
    };
    heatIndex: {
      unitCode: string;
      value: null;
      qualityControl: string;
    };
    cloudLayers: [
      {
        base: {
          unitCode: string;
          value: number;
        };
        amount: string;
      },
      {
        base: {
          unitCode: string;
          value: number;
        };
        amount: string;
      },
      {
        base: {
          unitCode: string;
          value: number;
        };
        amount: string;
      },
    ];
  };
}
