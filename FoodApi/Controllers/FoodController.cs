using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FoodWebApi.Models;



namespace FoodWebApi.Controllers
{
    public class FoodController : ApiController
    {
        // GET api/values
        public IEnumerable<Food> Get()
        {
            return new Food[] {
            new Food {  
                id = 1, 
                imagePath = "client/content/image/1.png", 
                items = new Items[]
                {
                new Items { id = 1, name = "Курица отварная", kkal = 225.0, checkk = false},
                new Items { id = 2, name = "Томаты", kkal = 40.0, checkk = false},
                new Items { id = 3, name = "Огурец", kkal = 10.0, checkk = false}
                } 
            },
            new Food {
                id = 2, 
                imagePath = "client/content/image/2.png", 
                items = new Items[]
                {
                new Items { id = 1, name = "Дыня", kkal = 100.0, checkk = false},
                new Items { id = 2, name = "Хлеб", kkal = 200.0, checkk = false},
                new Items { id = 3, name = "Морковь", kkal = 150.0, checkk = false}
                },

 
            
            },

            new Food {
                id = 3, 
                imagePath = "client/content/image/3.png", 
                items = new Items[]
                {
                new Items { id = 1, name = "Оливки", kkal = 230.0, checkk = false},
                new Items { id = 2, name = "Творожек", kkal = 700.0, checkk = false},
                new Items { id = 3, name = "Яблоко", kkal = 15.0, checkk = false}
                } },

                new Food {
                id = 4, 
                imagePath = "client/content/image/4.png", 
                items = new Items[]
                {
                new Items { id = 1, name = "Капуста", kkal = 90.0, checkk = false},
                new Items { id = 2, name = "Огурец", kkal = 800.0, checkk = false},
                new Items { id = 3, name = "Картофель", kkal = 400.0, checkk = false}
                } }
            
            
            };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}