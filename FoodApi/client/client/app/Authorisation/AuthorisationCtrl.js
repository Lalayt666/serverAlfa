(function() {
    var moduleId = "AuthorisationCtrl";
    angular.module("super_food").controller(moduleId, [Authorisation]);

    function Authorisation() {
        var vm = this;
        vm.name = '';
        vm.sortRegion = "name";
        vm.dateNew = dateNew;
        vm.showDate = false;
        vm.showDateBtn = showDateBtn;
        vm.curFood = curFood;

        vm.showName = showName;
        vm.curId=null; 


       
        init();



        function init() {

            console.log('Контроллер привет!');

        }

        function showName() {
            console.log('kkk');

            if (vm.name.length == 0) {
                return false;
            }
            return true;
        }
      



        function dateNew() {

            var dateCur = new Date();
            return dateCur;
        }

        function showDateBtn() {
            return vm.showDate = !vm.showDate;
        }

        function curFood() {


            console.log("вход");

            var date = new Date();
            var hour = date.getHours();
            console.log(hour);


            var e;
            var id;

            if (hour >= 0 && hour <= 6) {
                e = ' Вам стоит поспать!';
                id=0;
                vm.curId=id;
                return e;
            } else if (hour > 6 && hour < 14) {

                e = ' Сейчас завтрак';
                id=1;
                vm.curId=id;
                return e;

            } else if (hour >= 14 && hour <= 18) {

                e = ' Сейчас обед';
                id=2;
                vm.curId=id;
                return e;

            } else if (hour > 18 && hour <= 21) {

                e = ' Сейчас ужин';
                id=3;
                vm.curId=id;
                return e;

            } else if (hour > 21 && hour < 23) {
                e = ' Вам стоит поспать!';
                id=0;
                vm.curId=id;
                return e;
            }




        }
    }
})();
