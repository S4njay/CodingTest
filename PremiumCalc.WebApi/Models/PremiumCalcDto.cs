using System;
using System.ComponentModel.DataAnnotations;

namespace PremiumCalc.WebApi.Models
{
    public class PremiumCalcDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public DateTime Dob { get; set; }

        [Required]
        public string Occupation { get; set; }

        [Required]
        public double SumInsured { get; set; }
    }
}