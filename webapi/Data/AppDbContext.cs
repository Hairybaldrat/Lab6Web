﻿using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {
            
        }

        public DbSet<Item> Items { get; set; }
    }
}
