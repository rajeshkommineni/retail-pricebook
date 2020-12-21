var purchaseHistory = {
    constructor: function (data) {
      this.transactionid = data && data.transactionid ? data.transactionid : 0;
      this.grandAmount = data && data.grandAmount ? data.grandAmount : '';
      this.receivedDateTimeUtc = data && data.receivedDateTimeUtc ? data.receivedDateTimeUtc : false;
    },
    apiToHistoryMap: [
      ['id',
        apiObj => {
          const transactionid = apiObj.tlogId;
          const grandAmount = apiObj.grandAmount;
          const receivedDateTimeUtc = apiObj.receivedDateTimeUtc;
          return {
            transactionid,
            grandAmount,
            receivedDateTimeUtc            
          };
        },
        modelObj => {
          return;
        }
      ]
    ]
  }
  module.exports = purchaseHistory;