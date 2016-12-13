(function() {
    var moduleId = "Authorisation";
    angular.module("super_food").controller(moduleId, [Authorisation]);

    function Authorisation() {

        var vm = this;

        vm.foodlist = [];

        vm.isViewEditing = false;
        vm.editedFoodList = null;



        vm.cancel = cancel;
        vm.save = save;
        vm.add = add;
        vm.edit = edit;

        vm.sort = sort;
        vm.sortRegion = "name";
        vm.reverse = false;

        vm.sf = false;
        vm.showFilter = showFilter;

      



        init();

        function init() {




            vm.foodList = [{
                    id: 1,
                    image: 'client/content/image/1.png',
                    name: 'Помидор',
                    description: 'Плоды томата отличаются высокими питательными вкусовыми и диетическими качествами',
                    ck: false


                }, {
                    id: 2,
                    image: 'client/content/image/2.png',
                    name: 'Огурец',
                    description: 'Огурцы богаты сложными органическими веществами которые играют важную роль в обмене веществ',
                    ck: false

                },
                /*{
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

                           }*/
            ];

/*vm.removeLine=function(item) {
            var index=vm.foodList.indexOf(item);
            if(index>-1){
                vm.foodLine.splice(index,1);
            }
        }*/

        }

        function add() {
            console.log("Разработка add");
            vm.isViewEditing = true;
            vm.editedFoodList = { id: -1, image: 'client/content/image/5.png', name: '0', description: '0', ck: false, isNew: true };


        }

        function edit(row) {
            console.log('Разработка edit', row);
            origin = row;
            vm.editedFoodList = {};
            vm.editedFoodList = angular.copy(row);
            vm.isViewEditing = true;

        }

        function cancel() {
            console.log('Разработка cancel');
            vm.isViewEditing = false;
            vm.editedFoodList = null;
        }

        function save() {
            console.log('Разработка save');
            if (vm.editedFoodList.id == -1 && vm.editedFoodList.isNew) {
                vm.foodList.push(vm.editedFoodList);
                vm.editedFoodList.isNew = false;
            } else {
                angular.copy(vm.editedFoodList, origin);

            }
            cancel();

        }

        function sort(item) {

            if (vm.sortRegion === item) {
                vm.reverse = !vm.reverse;
            } else {
                vm.sortRegion = item;
                vm.reverse = false;
            }
        }

        function showFilter() {
            console.log("GO");
            vm.sf = !vm.sf;
        }

        







    }


})();
