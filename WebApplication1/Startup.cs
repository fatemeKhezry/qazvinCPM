using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebApplication1.Data.DBContext;
using WebApplication1.Models.DBContext;
using WebApplication1.Models.Users;

namespace WebApplication1
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        IConfigurationRoot Configuration;
        public Startup(IHostingEnvironment env)
        {
            Configuration = new ConfigurationBuilder().SetBasePath(env.ContentRootPath).AddJsonFile("AppSettings.json").Build();
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(
                Configuration["Data:CPMIdentity:ConnectionString"]));
            services.AddDbContext<MyDBContext>(options =>
            options.UseSqlServer(Configuration["Data:CPMData:ConnectionString"]));


            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseIdentity();
            app.UseDeveloperExceptionPage();
            app.UseStaticFiles();
            app.UseStatusCodePages();
            app.UseAuthentication();
            app.UseMvc(routes =>
            {
                routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
