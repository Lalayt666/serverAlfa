(function() {
    var moduleId = "Authorisation";
    angular.module("super_food").controller(moduleId, [Authorisation]);

    function Authorisation() {

        var     vm = this;

            vm.foodlist = [];
      
            vm.isViewEditing = false;
            vm.editedfoodlist = null;

            vm.curentWatch = [];

       /*   vm.cancel = cancel;
            vm.save = save;*/
            vm.add = add;
    
        
       
            vm.selectedFood = null;


        init();

        function init() {




                vm.foodlist = [{
                id: 1,
                image: 'client/content/image/1.png',
                name: 'Помидор',
                description: 'Плоды томата отличаются высокими питательными вкусовыми и диетическими качествами',
                cK: false


            }, {
                id: 2,
                image: 'client/content/image/2.png',
                name: 'Огурец',
                description: 'Огурцы богаты сложными органическими веществами которые играют важную роль в обмене веществ',
                cK: false

            }, /*{
                id: 3,
                image: 'client/content/image/3.png',
                name: 'Шампиньон',
                description: 'В пищевых шампиньонах содержатся 20 аминокислот в том числе все незаменимые для человека',
                cK: false

            }, {
                id: 4,
                image: 'client/content/image/4.png',
                name: 'Редис',
                description: 'Содержит ряд необходимых человеку витаминов нужных человеку для восстанавления иммунитета',
                cK: false

            }*/];



        }

        function add() {
            console.log("Разработка add");
                vm.isViewEditing = true;
                vm.editedfoodlist = { id: -1,  image: '0', name: '0', description: '0', cK: false, isNew:true };


        }

         function edit(row) {
            console.log('Разработка edit', row);
            origin = row;
            vm.editedfoodlist = {};
            vm.editedfoodlist = angular.copy(row);
            vm.isViewEditing = true;

        }
               function cancel() {
            console.log('Разработка cancel');
                at.isViewEditing = false;
                at.editedfoodlist = null;
        }

            function save() {
            console.log('Разработка save');
            if (    vm.editedfoodlist.id == -1 &&     vm.editedfoodlist.isNew) {
                    vm.selectedFood.foodlist.push(    vm.editedfoodlistu);
                    vm.editedfoodlist.isNew = false;
            } else {
                angular.copy(   vm.editedfoodlist, origin);

            }
            cancel();

        }

        



        /*function curFood() {
            console.log("вход");

            var date = new Date();
            var hour = date.getHours();
            console.log(hour);


            var e;

            if (hour >= 0 && hour <= 6) {
                e = ' Вам стоит поспать!';
                return e;
            } else if (hour > 6 && hour < 14) {

                e = ' Сейчас завтрак';
                return e;

            } else if (hour >= 14 && hour <= 18) {

                e = ' Сейчас обед';
                return e;

            } else if (hour > 18 && hour <= 21) {

                e = ' Сейчас ужин';
                return e;

            } else if (hour > 21 && hour < 23) {
                e = ' Вам стоит поспать!';
                return e;
            }
            
        }*/






    }


})();
