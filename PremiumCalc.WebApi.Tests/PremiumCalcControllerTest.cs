using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PremiumCalc.WebApi.Controllers;
using PremiumCalc.WebApi.Models;

namespace PremiumCalc.WebApi.Tests
{
    [TestClass]
    public class ValuesControllerTest
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

            //var mockPremiumCalcController = mockRepo.Create<PremiumCalcController>();
            var mockOccupationRepository = mockRepo.Create<IOccupationRepository>();
            mockOccupationRepository
                .Setup(x => x.GetOccupationRatingFactor("Cleaner"))
                .Returns(1.50);

            PremiumCalcController controller = new PremiumCalcController(mockOccupationRepository.Object);


            // Act
            var response = controller.Post(request);
            // Assert

            Assert.AreEqual(540, response.Premium);
        }
    }
}