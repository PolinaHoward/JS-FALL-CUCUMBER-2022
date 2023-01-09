const moment = require("moment/moment");

class Dates {



    async getCurrentDate() {
        const now = moment();
        return now.format('D');
    }

    static getCurrentMonthNameInShort() {
        const now = moment();
        return now.format('MMM');
    }

    static getCurrentYearInYYYY() {
        const now = moment();
        return now.format('YYYY');
    }

    async getCurrentMonthAndYear(){
        const now = moment()
        return now.format('MMMM YYYY')
    }

    async getPreviousDate() {
        const now = moment();
        return await moment().subtract(1, "days").format("D");
       
    }
    
    

}
module.exports = Dates;
