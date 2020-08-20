using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PremiumCalc.WebApi.Controllers;
using PremiumCalc.WebApi.Models;

namespace PremiumCalc.WebApi.Tests
{
    [TestClass]
    public class OccupationsControllerTests
    {

        [TestMethod]
        public void Get()
        {
            // Arrange

            var expectedResponse = new[] {"occ1", "occ2"};
            var mockRepo = new MockRepository(MockBehavior.Strict);

            var mockOccupationRepository = mockRepo.Create<IOccupationRepository>();
            mockOccupationRepository
                .Setup(x => x.GetOccupations())
                .Returns(expectedResponse);

            OccupationsController controller = new OccupationsController(mockOccupationRepository.Object);


            // Act
            var response = controller.Get();
            // Assert

            Assert.AreEqual(expectedResponse, response);
        }
    }
}