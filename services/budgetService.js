var
  _ = require('lodash'),
  async = require('async'),
  soap = require('soap');

var AdWordsService = require('./adWordsService');
var types = require('../types/budget');

function Service(options) {
  var self = this;
  AdWordsService.call(self, options);
  self.Collection = types.collection;
  self.Model = types.model;
  // self.operatorKey = 'cm:operator';
  // self.rvalKey = 'labels';

  self.selectable = [
    'Amount',
    'BudgetId',
    'BudgetName',
    'BudgetReferenceCount',
    'BudgetStatus',
    'DeliveryMethod',
    'IsBudgetExplicitlyShared',
    'Period'
  ];

  self.xmlns = 'https://adwords.google.com/api/adwords/cm/v201506';
  self.wsdlUrl = self.xmlns + '/BudgetService?wsdl';
}

Service.prototype = _.create(AdWordsService.prototype, {
  'constructor': Service
});

module.exports = (Service);