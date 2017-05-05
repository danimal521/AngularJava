using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AJS2Demo1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public void Save(Model m)
        {

        }

        public ActionResult GetBikes()
        {
            Model mReturn                                               = new Model();
            try
            {             
                List<Bike> ab                                           = new List<Bike>();
                ab.Add(new Bike { Name = "FSR", Price = 6500M, Quantity = 10 });
                ab.Add(new Bike { Name = "Sink'r Pro", Price = 2300M, Quantity = 5 });
                mReturn.Bikes                                           = ab.ToArray();              
            }
            catch (Exception)
            {
                
            }

            return Json(mReturn, JsonRequestBehavior.AllowGet);            
        }
    }

    public class Model
    {
        public Bike[] Bikes { get; set; }
    }

    public class Bike
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }                       
    }
}