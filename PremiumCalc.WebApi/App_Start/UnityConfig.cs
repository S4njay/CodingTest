using System.Web.Http;
using PremiumCalc.WebApi.Models;
using Unity;
using Unity.WebApi;

namespace PremiumCalc.WebApi
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            container.RegisterType<IOccupationRepository, OccupationRepository>();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}