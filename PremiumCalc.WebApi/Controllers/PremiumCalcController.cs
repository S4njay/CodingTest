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
    public class PremiumCalcController : ApiController
    {
        private readonly IOccupationRepository _occupationRepository;

        public PremiumCalcController(IOccupationRepository occupationRepository)
        {
            _occupationRepository = occupationRepository;
        }

        public PremiumCalcResponse Post(PremiumCalcDto request)
        {
            if (ModelState.IsValid)
            {
                var premiumCalcRequest = new PremiumCalcEntity
                {
                    Age = request.Age,
                    OccupationRatingFactor = _occupationRepository.GetOccupationRatingFactor(request.Occupation),
                    SumInsured = request.SumInsured
                };

                return GetPremium(premiumCalcRequest);
            }

            throw new Exception("bad request");
        }

        private PremiumCalcResponse GetPremium(PremiumCalcEntity pcr)
        {
            return new PremiumCalcResponse
            {
                Premium = (pcr.SumInsured * pcr.OccupationRatingFactor * pcr.Age) / (1000 * 12)
            };
        }
    }
}