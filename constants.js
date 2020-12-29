var constants = {
  BSP: {
    API_PARAMS: {
      /* // Rajesh
      SHARED_KEY: '1e95aa27f5ad4f4e90886309fd20c018',
      SECRET_KEY: '85667db9ef80424595186809158efb0c',
      NEP_ENTERPRISE_UNIT: 'ca004432ccab4d3aa92642f05dd90a68',
      ORGANIZATION: 'db0665b137b147ff8daf7e7ac1aef9af',
      BASE_URL: 'https://gateway-staging.ncrcloud.com'
      */

      // Radha 
      SHARED_KEY: '9dba64c3f8e142ef97b4c37b2705cf95',
      SECRET_KEY: '145853e36b9243689e195588da7e0a68',
      NEP_ENTERPRISE_UNIT: 'e9c2036a60b845e4a4b8ce9082beb6f0',
      ORGANIZATION: 'sr185246',
      BASE_URL: 'https://gateway-staging.ncrcloud.com'
    },
    API_ENDPOINTS: {
      AUTHENTICATE: '/security/authentication/login',
      CATALOG_SERVICE: {
        GET_CAT_ITEMS: '/catalog/items',
        GET_ITEM_INFO: '/catalog/items/',
        GET_CAT_ITEM_DETAILS: '/catalog/item-details/search?',
        GET_CATS: '/catalog/category-nodes',
        GET_ITEM_ATTRIBUTES: '/catalog/item-attributes/',
        GET_ITEM_PRICES: '/catalog/item-prices/',
        PUT_CATS: '/catalog/category-nodes',
        PUT_ITEM_INFO: '/catalog/items',
        PUT_ITEM_ATTRIBUTES: '/catalog/item-attributes',
        PUT_ITEM_PRICES: '/catalog/item-prices',
        GET_ITEM_PRICES_SNAPSHOT: '/catalog/item-prices/snapshot',
        
      },
      ITEM_AVAILABILITY_SERVICE: {
        GET_ITEM_AVAILABILITY: '/ias/item-availability/',
      },
      DELIVERY_SERVICES: {
        POST_DELIVERY_QUOTE: '/delivery/quotes',
        POST_DELIVERY_CREATE_DELIVERY: '/delivery/deliveries',
      },
      ORDER_SEREVICE: {
        POST_CREATE_ORDER: '/order/orders',
        GET_ORDER_DETAILS: '/order/orders/',
      },
      TDM_SERVICE: {
        POST_UPLOAD_TDM: '/transaction-document/v2/transaction-documents/',
        POST_FIND_TDM: '/transaction-document/v2/transaction-documents/find'
      },
      SITE_SERVICE: {
        GET_SITES: '/site/sites',
        POST_SITE_EXTENSIONS: '/site/extensions',
        POST_SITE_DETAILS: '/site/sites',
        POST_SITE_FIND_BY_CRITERIA: '/site/sites/find-by-criteria'
      },
      DIGITAL_RECEIPT_SERVICE: {
        GET_DIGITAL_RECEIPT: '/nr1dr/receipt/images/',
      }
    },
  },
  METHOD_TYPES: {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
  },
  COSMOS_DB : {
    endpoint: "https://azurecosmosdemo.documents.azure.com:443/",
    key: "W5v1OMJDtnTaDrIO5fzNtG9pI5HV96A1fvoa14mA9BdgaVWD9kH24mWVnZzdt9YxHBbfct10C9eRf8om2Zbx2Q==",
    databaseId: "Tasks",
    containerId: "SiteTracking",
    partitionKey: { kind: "Hash", paths: ["/category"] }
  },
};

module.exports = constants;
