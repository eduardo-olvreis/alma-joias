using Microsoft.EntityFrameworkCore;
using Produtos_API.Models;

namespace Produtos_API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Joia> Joias { get; set; }
    }
}
