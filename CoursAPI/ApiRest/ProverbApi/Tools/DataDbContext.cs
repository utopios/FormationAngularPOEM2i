using Microsoft.EntityFrameworkCore;
using ProverbApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProverbApi.Tools
{
    public class DataDbContext : DbContext
    {
        public DataDbContext() : base()
        {

        }

        public DbSet<Proverb> Proverbs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(LocalDB)\ProverbsAPI;Integrated Security=True");
        }
    }
}
