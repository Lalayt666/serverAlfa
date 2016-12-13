using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodWebApi.Models
{
    public class Food
    {
        public int id { set; get; }
        public string imagePath { set; get; }
        public IEnumerable<Items> items {set; get;}
    }
}