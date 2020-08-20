using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using PremiumCalc.WebApi.Models;

namespace PremiumCalc.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class OccupationsController : ApiController
    {
        private readonly IOccupationRepository _occupationRepository;

        public OccupationsController(IOccupationRepository occupationRepository)
        {
            _occupationRepository = occupationRepository;
        }

        public IEnumerable<string> Get()
        {
            return _occupationRepository.GetOccupations();
        }
    }
}