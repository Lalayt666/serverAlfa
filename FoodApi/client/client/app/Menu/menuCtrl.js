(function() {
    var moduleId = "Menu";
    angular.module("super_food").controller(moduleId, ['$routeParams', Menu]);

    function Menu($routeParams) {

        var vm = this;

        vm.isViewEditing = false;
        vm.editedMenu = null;

        vm.item = [];
        vm.selectedMeal = null;

        vm.edit = edit;
       /* vm.remove = remove;*/
        vm.cancel = cancel;
        vm.save = save;
        vm.add = add;

        vm.sort = sort;
        vm.sortRegion = "name";
        vm.reverse = false;

  
        vm.searchMenu = "";
       
        vm.sf=false;
        vm.showFilter=showFilter;

            vm.checkname = false;
            vm.checkView = vm.checkView;


        


        init();



        function init() {
            vm.item = [{
                    id: 0,
                    name: 'Время поспать',
                    description: 'Ложитесь пожалуйста спать!',
                    menulist: [{
                        id: 1,
                        name: '-',
                        description: '-',
                        ck: false
                    }, {
                        id: 2,
                        name: '-',
                        description: '-',
                        ck: false
                    }, {
                        id: 3,
                        name: '-',
                        description: '-',
                        ck: false
                    }]

                }, {
                    id: 1,
                    name: 'Завтрак',
                    description: 'Ежедневно сразу после пробуждения за полчаса до приема пищи следует выпивать стакан структурированной воды. Затем организовать себе легкий эноргоемкий завтрак.',
                    menulist: [{
                        id: 1,
                        name: 'Дыня',
                        description: 'лучше кушать одну',
                        ck: false
                    }, {
                        id: 2,
                        name: 'Томаты',
                        description: 'овощи, мясо, гарнир',
                        ck: false
                    }, {
                        id: 3,
                        name: 'Огурец',
                        description: 'овощи, мясо, гарнир',
                        ck: false
                    }]
                }, {
                    id: 2,
                    name: 'Обед',
                    description: 'Желательно употреблять продукты богатые белками. Традиционные рыбные или мясные блюда - без гарнира из макарон или картофеля. Их можно дополнить салатом из фруктов  овощей. Для первых блюд - овощной бульон или овощной суп, на десерт - несладкие фрукты.',
                    menulist: [{
                        id: 1,
                        name: 'Курица отварная',
                        description: 'овощи, гарнир',
                        ck: false
                    }, {
                        id: 2,
                        name: 'Хлеб',
                        description: 'подходик кок всему',
                        ck: false
                    }, {
                        id: 3,
                        name: 'Морковь',
                        description: 'овощи, гарнир',
                        ck: false
                    }]

                }, {
                    id: 3,
                    name: 'Ужин',
                    description: 'Должен состоять из продуктов, богатых на углеводы, поскольку они быстро усваиваются организмом. Это может быть морковная или картофельная запеканка, сладкие фрукты или макароны с сыром.',
                    menulist: [{
                        id: 1,
                        name: 'Рыба',
                        description: 'Совместим с овощами и фруктами',
                        ck: false
                    }, {
                        id: 2,
                        name: 'кефир',
                        description: 'печенька',
                        ck: false
                    }, {
                        id: 3,
                        name: 'яблоко',
                        description: 'кефир',
                        ck: false
                    }]

                }


            ];

            for (var i = 0; i < vm.item.length; i++) {
                var cur = vm.item[i];
                if (cur.id == $routeParams.idMeal) {

                    vm.selectedMeal = cur;
                    break;
                }
            }

        }


        function add() {
            console.log("Разработка add");
            vm.isViewEditing = true;
            vm.editedMenu = { id: -1, name: '0', descriprion: '0', ck: false, isNew: true };

        }

        function edit(row) {
            console.log('Разработка edit', row);
            origin = row;
            vm.editedMenu = {};
            vm.editedMenu = angular.copy(row);
            vm.isViewEditing = true;

        }

/*        function remove(row) {
            vm.data.item.spice(row);



        }*/

        function cancel() {
            console.log('Разработка cancel');
            vm.isViewEditing = false;
            vm.editedMenu = null;

        }

        function save() {
            console.log('Разработка save');
            if (vm.editedMenu.id == -1 && vm.editedMenu.isNew) {
                vm.selectedMeal.menulist.push(vm.editedMenu);
                vm.editedMenu.isNew = false;
            } else {
                angular.copy(vm.editedMenu, origin);

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
            vm.sf = !vm.sf;
        }
function checkView() {

   if  (vm.checkname = true)
       {vm.checkname = ! vm.checkname;}
}

    }
})();
