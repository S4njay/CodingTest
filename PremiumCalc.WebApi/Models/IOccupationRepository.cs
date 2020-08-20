using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PremiumCalc.WebApi.Models
{
    public interface IOccupationRepository
    {
        IEnumerable<string> GetOccupations();
        double GetOccupationRatingFactor(string occupation);
    }

    public class OccupationRepository : IOccupationRepository
    {

        private readonly Dictionary<string, string> OccupationRatings = new Dictionary<string, string>
        {
            {"Cleaner", "Light Manual"},
            {"Doctor", "Professional"},
            {"Author", "White Collar"},
            {"Farmer", "Heavy Manual"},
            {"Mechanic", "Heavy Manual"},
            {"Florist", "Light Manual"}
        };

        private readonly Dictionary<string, double> RatingFactors = new Dictionary<string, double>
        {
            {"Professional", 1.0}, {"White Collar", 1.25}, {"Light Manual", 1.50}, {"Heavy Manual", 1.75}
        };

        public IEnumerable<string> GetOccupations()
        {
            return OccupationRatings.Keys.AsEnumerable();
        }

        public double GetOccupationRatingFactor(string occupation)
        {
            return RatingFactors[OccupationRatings[occupation]];
        }
    }
}
