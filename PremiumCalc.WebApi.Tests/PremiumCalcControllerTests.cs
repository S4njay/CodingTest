using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PremiumCalc.WebApi.Controllers;
using PremiumCalc.WebApi.Models;

namespace PremiumCalc.WebApi.Tests
{
    [TestClass]
    public class PremiumCalcControllerTests
    {

        [TestMethod]
        public void Post()
        {
            // Arrange

            var request = new PremiumCalcDto
            {
                Age = 30,
                SumInsured = 1000,
                Dob = new DateTime(1980, 1, 1, 0, 0, 0),
                Name = "unit test",
                Occupation = "Cleaner"
            };

            var mockRepo = new MockRepository(MockBehavior.Strict);

            var mockOccupationRepository = mockRepo.Create<IOccupationRepository>();
            mockOccupationRepository
                .Setup(x => x.GetOccupationRatingFactor("Cleaner"))
                .Returns(1.50);

            PremiumCalcController controller = new PremiumCalcController(mockOccupationRepository.Object);


            // Act
            var response = controller.Post(request);
            
            // Assert
            // 1000 * 1.5 * 30 / 12000 = 3.75
            Assert.AreEqual(3.75, response.Premium);
        }
    }
}