module.exports = function(){
    var faker =require("faker");
    var _ = require("lodash");
    return {
        tableData: _.times(100,function (n) {
        return {
          id: n,
          name: faker.name.findName(),
          tele_number: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          address: faker.address.city(),
          data: faker.date.month()
        }
      })
    }
  }
  