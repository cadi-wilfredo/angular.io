// #docregion
import { Phone, PhoneData } from '../core/phone/phone.service';
declare var angular: any;

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;

  static $inject = ['phone'];
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

}

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'app/phone-list/phone-list.template.html',
    controller: PhoneListController
  });
