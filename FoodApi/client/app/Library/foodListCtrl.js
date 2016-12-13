(function() {
    var moduleId = "FoodController";
    angular.module("super_food").controller(moduleId, ['$http', '$routeParams', Food]);

    function Food($http, $routeParams) {

        var fd = this;
        fd.selectedFood = null;

        fd.foodList = [];
        fd.foodListTwo = [];

        fd.isViewEditing = false;
        fd.editedFood = null;


        fd.edit = edit;
        fd.remove = remove;
        fd.cancel = cancel;
        fd.save = save;
        fd.add = add;
        fd.summ = summ;

        fd.sort = sort;
        fd.sortRegion = "name";
        fd.reverse = false;

        fd.viewSearch = false;
        fd.searchFood = "";
       
        fd.sf=false;
        fd.showFilter=showFilter;
        fd.unView = true;
        



        init();

        function init() {
            $http({ method: "GET", url: "api/food" }).then(function(responce) {
                fd.data = responce.data;
                console.log(responce);
                console.log(fd.data);

                for (var i = 0; i < fd.data.length; i++) {
                    var cur = fd.data[i];
                    if (cur.id == $routeParams.idFood) {

                        fd.selectedFood = cur;
                        break;
                    }
                }
            });
            
            /*
            fd.data = [{

                    id: 1,
                    name: 'Про помидорчик',
                    imagePath: 'client/content/image/1.png',
                    items: [{
                        id: 1,
                        name: 'Курица отварная',
                        kkal: 225,
                        checkK: false
                    }, {
                        id: 2,
                        name: 'Томаты',
                        kkal: 40,
                        checkK: false
                    }, {
                        id: 3,
                        name: 'Огурец',
                        kkal: 10,
                        checkK: false
                    }]
                }, {
                    id: 2,
                    name: 'Про огурчик',
                    imagePath: 'client/content/image/2.png',
                    items: [{
                        id: 1,
                        name: 'Дыня',
                        kkal: 100,
                        checkK: false
                    }, {
                        id: 2,
                        name: 'Хлеб',
                        kkal: 200,
                        checkK: false
                    }, {
                        id: 3,
                        name: 'Морковь',
                        kkal: 150,
                        checkK: false
                    }]

                }

            ];*/

            
        }

        function add() {
            console.log("Разработка add");
            fd.isViewEditing = true;
            fd.editedFood = { id: -1, name: '0', kkal: '0', checkK: false, isNew:true };

        }

        function edit(row) {
            console.log('Разработка edit', row);
            origin = row;
            fd.editedFood = {};
            fd.editedFood = angular.copy(row);
            fd.isViewEditing = true;

        }

        function remove() {
            for (var i = 0, l = fd.selectedFood.items.length; i < l; i += 1) {
            console.log('Разработка remove');
            var cm = fd.selectedFood.items[i];
            if(cm.checkK){
                fd.unView = false;
           
            }}
            
        }

        function cancel() {
            console.log('Разработка cancel');
            fd.isViewEditing = false;
            fd.editedFood = null;

        }

        function save() {
            console.log('Разработка save');
            if (fd.editedFood.id == -1 && fd.editedFood.isNew) {
                fd.selectedFood.items.push(fd.editedFood);
                fd.editedFood.isNew = false;
            } else {
                angular.copy(fd.editedFood, origin);

            }
            cancel();

        }

        function summ() {

            var sum = 0;
            for (var i = 0, l = fd.selectedFood.items.length; i < l; i += 1) {
                var cm = fd.selectedFood.items[i];
                if (cm.checkK) {
                    sum += cm.kkal;
                }
            }
            return sum;

        }

        function sort(item) {

            if (fd.sortRegion === item) {
                fd.reverse = !fd.reverse;
            } else {
                fd.sortRegion = item;
                fd.reverse = false;
            }
        }

       

        function showFilter() {
            fd.sf=!fd.sf;
        }



    }
})();
