using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Data.DBContext
{
    public class MyDBContext :DbContext
    {
        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options) { }
        public DbSet<Requests> Requests { get; set; }
        public DbSet<mytable> mytable { get; set; }
    }
}
